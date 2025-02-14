import { startTransition, Suspense, useState } from "react";
import * as S from "./style";
import NoticeSearchBar from "components/common/NoticeSearchbar";
import { useNotice } from "hooks/Notice/useNotice";
import ErrorBoundary from "components/common/ErrorBoundary";
import NoticeItem from "components/Notice/NoticeItem";
import SkeletonComponent from "components/common/Skeleton";
import { useInfiniteNotices } from "queries/Notice/notice.query";

const NoticePage = () => {
  const { searchRef } = useNotice();
  const [keyword, setKeyword] = useState("");
  const { refetch } = useInfiniteNotices(keyword); 

  const handleSearch = () => {
    if (searchRef.current) {
        const newKeyword = searchRef.current.value;
        startTransition(() => {
          setKeyword(newKeyword);
          refetch(); 
        });
    }
  };

  return (
    <S.NoticeBox>
      <NoticeSearchBar ref={searchRef} searchFn={handleSearch} />
      <S.NoticeSection>
        <ErrorBoundary text="데이터를 불러오지 못했습니다." showButton={true}>
          <Suspense fallback={<SkeletonComponent length={5} height={115} />}>
            <NoticeItem keyword={keyword} />
          </Suspense>
        </ErrorBoundary>
      </S.NoticeSection>
    </S.NoticeBox>
  );
};

export default NoticePage;
