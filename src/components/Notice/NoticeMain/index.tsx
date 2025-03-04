import { startTransition, Suspense, useEffect, useState } from "react";
import * as S from "./style";
import NoticeSearchBar from "components/common/NoticeSearchbar";
import { useNotice } from "hooks/Notice/useNotice";
import ErrorBoundary from "components/common/ErrorBoundary";
import NoticeItem from "./NoticeItem";
import SkeletonComponent from "components/common/Skeleton";
import { useInfiniteNotices } from "queries/Notice/notice.query";
import { Notice } from "types/Notice/notice.type";

interface NoticeMainProps {
  openDetail: (notice: Notice) => void;
}

const NoticeMain = ({ openDetail }: NoticeMainProps) => {
  const { searchRef, selectCategory } = useNotice();
  const [keyword, setKeyword] = useState("");
  const { refetch } = useInfiniteNotices(keyword); 

  useEffect(() => {
    refetch();
  }, [keyword, refetch]);

  const handleSearch = () => {
    if (searchRef.current) {
      const newKeyword = searchRef.current.value;
      startTransition(() => {
        setKeyword(newKeyword);
      });
    }
  };

  return (
    <>
      <NoticeSearchBar ref={searchRef} searchFn={handleSearch} />
      <S.NoticeSection>
        <ErrorBoundary text="데이터를 불러오지 못했습니다." showButton={true}>
          <Suspense fallback={<SkeletonComponent length={10} height={115} />}>
            <NoticeItem selectCategory={selectCategory} keyword={keyword} openDetail={openDetail} />
          </Suspense>
        </ErrorBoundary>
      </S.NoticeSection>
    </>
  );
};

export default NoticeMain;
