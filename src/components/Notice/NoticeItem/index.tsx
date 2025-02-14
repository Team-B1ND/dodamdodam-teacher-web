import React from "react";
import { useInfiniteNotices } from "queries/Notice/notice.query";
import * as S from "./style";
import { Notice } from "types/Notice/notice.type";
import SkeletonComponent from "components/common/Skeleton";
import InfiniteScroll from "react-infinite-scroller";
import convertDateTime from "utils/Time/ConvertDateTime";
import dayjs from "dayjs";

interface NoticeItemProps {
  keyword: string;
}

const NoticeItem = ({ keyword }: NoticeItemProps) => {
  const { data: Notice, fetchNextPage, hasNextPage } = useInfiniteNotices(keyword);

  return (
    <>
      <InfiniteScroll
        style={{
          display:"flex",
          flexDirection:"column",
          gap:"12px"
        }}
        loadMore={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={<SkeletonComponent length={5} height={48} />}
      >
        {Notice?.pages.map((page, pageIndex) =>
          page.data?.map((notice: Notice, index: number) => (
            <S.NoticeItem key={`${pageIndex}-${index}`}>
              <S.NoticeHeader>
                <span>{notice?.memberInfoRes?.name ?? "알 수 없음"}</span> ·{" "}
                <span>{convertDateTime.getDateTime(dayjs(notice?.createdAt).toDate(), "date") ?? "날짜 없음"}</span>

              </S.NoticeHeader>
              <S.NoticeTitle>{notice?.title ?? "제목 없음"}</S.NoticeTitle>
              <S.NoticeContent>{notice?.content ?? "내용 없음"}</S.NoticeContent>
            </S.NoticeItem>
          ))
        )}
      </InfiniteScroll>
    </>
  );
};

export default NoticeItem;
