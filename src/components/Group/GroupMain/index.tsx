import React, { Suspense } from "react";
import * as S from "./style";
import NoticeSearchBar from "components/common/NoticeSearchbar";
import { useGroup } from "hooks/Group/useGroup";
import { Plus, DodamSegmentedButton, DodamShape } from "@b1nd/dds-web";
import ErrorBoundary from "components/common/ErrorBoundary";
import SkeletonComponent from "components/common/Skeleton";
import GroupItem from "./GroupItem";

const GroupMain = () => {
    const {...group} = useGroup();
    
    return(
        <S.GroupBox>
            <NoticeSearchBar 
            searchFn={group.searchSubmit} 
            ref={group.searchRef} 
            placeholder="검색할 그룹을 입력하세요"
            />
            <S.GroupPicker>
                <S.GroupTitle>
                    <p>그룹</p>
                    <Plus 
                    size={28} 
                    color="labelAlternative"
                    $svgStyle={{cursor:"pointer"}}
                    />
                </S.GroupTitle>
                <DodamSegmentedButton 
                width={200}
                num={2} 
                type={"block"} 
                onClick={() => group.setAtv(prev => !prev)} 
                data={[
                    { text: '내그룹', isAtv: group.isAtv, },
                    { text: '전체', isAtv: !group.isAtv },
                ]}/>
                <S.GroupDataBox>
                    <ErrorBoundary text="데이터를 불러오지 못했습니다." showButton={true}>
                        <Suspense fallback={<SkeletonComponent height={48} customStyle={{borderRadius:"8px"}}/>}>
                            <GroupItem isAtv={group.isAtv}/>
                        </Suspense>
                    </ErrorBoundary>
                </S.GroupDataBox>
            </S.GroupPicker>
        
        </S.GroupBox>
    )
}
export default GroupMain;