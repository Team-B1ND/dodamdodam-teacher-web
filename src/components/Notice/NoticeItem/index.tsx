import React, { useRef, useEffect } from "react";
import { useInfiniteNotices } from "queries/Notice/notice.query";
import * as S from "./style";
import { Notice } from "types/Notice/notice.type";
import SkeletonComponent from "components/common/Skeleton";

const NoticeItem = () => {
  const { data: Notice, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteNotices();
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!observerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);

  return (
    <>
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
      <div ref={observerRef} style={{ height: "10px", background: "transparent" }} />

      
      {isFetchingNextPage && <SkeletonComponent height={50}/>}
    </>
  );
};

export default NoticeItem;
