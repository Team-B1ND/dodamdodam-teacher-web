import React, { useRef, useEffect } from "react";
import { useInfiniteNotices } from "queries/Notice/notice.query";
import * as S from "./style";
import { Notice } from "types/Notice/notice.type";
import SkeletonComponent from "components/common/Skeleton";
import InfiniteScroll from "react-infinite-scroller";

const NoticeItem = () => {
  const { data: Notice, fetchNextPage, hasNextPage } = useInfiniteNotices();
  const observerRef = useRef<HTMLDivElement | null>(null);


  return (
    <>
    <InfiniteScroll
     loadMore={() => fetchNextPage()}
     hasMore={hasNextPage}
     loader={<SkeletonComponent length={5} height={48}/>}
    >
     {Notice?.pages.map((page, pageIndex) =>
        page.notices.map((notice: Notice, index: number) => ( 
            <S.NoticeItem key={`${pageIndex}-${index}`}>
                <S.NoticeHeader>
                    <span>{notice.memberInfoRes.name}</span> · 
                    <span>{notice.createdAt}</span>
                </S.NoticeHeader>
                <S.NoticeTitle>{notice.title}</S.NoticeTitle>
                <S.NoticeContent>{notice.content}</S.NoticeContent>
            </S.NoticeItem>
        ))
    )}
      </InfiniteScroll>
    </>
  );
};

export default NoticeItem;
