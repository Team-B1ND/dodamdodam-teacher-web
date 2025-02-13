import { Suspense } from "react";
import * as S from "./style";
import NoticeSearchBar from "components/common/NoticeSearchbar";
import { useNotice } from "hooks/Notice/useNotice";
import ErrorBoundary from "components/common/ErrorBoundary";
import NoticeItem from "components/Notice/NoticeItem";
import SkeletonComponent from "components/common/Skeleton";


const NoticePage = () => {
    const {...notice} = useNotice();

    return(
    
        <S.NoticeBox>
            <NoticeSearchBar  
                ref={notice.searchRef} 
                searchFn={notice.searchSubmit}
            />
            <S.NoticeSection>
                <ErrorBoundary text="데이터를 불러오지 못했습니다." showButton={true}>
                    <Suspense fallback={<SkeletonComponent length={5} height={115}/>}>
                        <NoticeItem/>
                    </Suspense>
                </ErrorBoundary>
            </S.NoticeSection>
        </S.NoticeBox>
    
    )
}
export default NoticePage;