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
  openDetail:(notice: Notice) => void;
}

const NoticeItem = ({ keyword, selectCategory,openDetail }: NoticeItemProps) => {
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
          page.data?.map((notice: Notice, index: number) => {
            // fileUrl이 배열일 경우 처리, 없으면 빈 배열로 초기화
            const images = Array.isArray(notice?.fileUrl)
              ? notice.fileUrl.filter((url) => url != null && url !== "")
              : notice?.fileUrl ? [notice.fileUrl] : [];
            
            // 남은 이미지 수 계산
            const remainingImages = images.length > 2 ? images.length - 2 : 0;

            return (
              <S.NoticeItem key={`${pageIndex}-${index}`}  onClick={() => openDetail(notice)}>
                <S.NoticeHeader>
                  <span>{notice?.memberInfoRes?.name ?? "알 수 없음"}</span> ·{" "}
                  <span>{convertDateTime.getDayOfWeek(dayjs(notice?.createdAt).toDate()) ?? "날짜 없음"}</span>
                </S.NoticeHeader>
                <S.NoticeTitle>{notice?.title ?? "제목 없음"}</S.NoticeTitle>
                <S.NoticeContent>
                  <Linkify
                    componentDecorator={(
                      decoratedHref: string,
                      decoratedText: string,
                      key: number
                    ) => (
                      <a href={decoratedHref} key={key} target="_blank" rel="noopener noreferrer">
                        {decoratedText}
                      </a>
                    )}
                  >
                    {notice?.content ?? "내용 없음"}
                  </Linkify>
                </S.NoticeContent>
                
                {/* <S.NoticeImg>
                  {images.length > 0 ? (
                    images.slice(0, 2).map((image, idx) => 
                      image ? <img key={idx} src={image} alt={`notice-img-${idx}`} /> : null
                    )
                  ) : (
                    <div>이미지 없음</div>
                  )}
                </S.NoticeImg> */}
              </S.NoticeItem>
            );
          })
        )}
      </InfiniteScroll>
    </>
  );
};

export default NoticeItem;
