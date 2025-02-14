import { useInfiniteNotices } from "queries/Notice/notice.query";
import * as S from "./style";
import { Notice } from "types/Notice/notice.type";
import SkeletonComponent from "components/common/Skeleton";
import InfiniteScroll from "react-infinite-scroller";
import convertDateTime from "utils/Time/ConvertDateTime";
import dayjs from "dayjs";
import Linkify from "react-linkify";

interface NoticeItemProps {
  keyword: string;
  selectCategory?: number;
}

const NoticeItem = ({ keyword, selectCategory }: NoticeItemProps) => {
  const { data: Notice, fetchNextPage, hasNextPage } = useInfiniteNotices(keyword, selectCategory);

  // 공지가 없을 경우 
  if (!Notice || Notice.pages.length === 0 || Notice.pages.every(page => page.data.length === 0)) {
    return <div>공지가 없습니다</div>;
  }

  return (
    <>
      <InfiniteScroll
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
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
              <S.NoticeContent>
                {/* open new tab */}
              <Linkify
                componentDecorator={(
                decoratedHref: string,
                decoratedText: string,
                key: number
                ) => (
                <a href={decoratedHref} key={key} target="_blank">
                    {decoratedText}
                </a>
                )}
                >
                  {notice?.content ?? "내용 없음"}
                </Linkify>
              </S.NoticeContent>
            </S.NoticeItem>
          ))
        )}
      </InfiniteScroll>
    </>
  );
};

export default NoticeItem;
