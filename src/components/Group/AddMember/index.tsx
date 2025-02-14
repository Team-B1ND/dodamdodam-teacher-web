import { Dispatch, SetStateAction } from 'react';
import NoticeSearchBar from "components/common/NoticeSearchbar";
import * as  S from "./style";
import { useAddMember } from "hooks/Group/useAddmember";
import { ChevronLeft, DodamFilledButton } from "@b1nd/dds-web";
import ErrorBoundary from "components/common/ErrorBoundary";
import { Suspense } from "react";
import AddMemberItem from "./AddMemberItem";

interface GroupProps {
    groupId: number;
    setSection: Dispatch<SetStateAction<string>>;
}

const AddMember = ({ groupId, setSection }: GroupProps) => {
    const {...addMember} = useAddMember();
    return(
        <S.AddMemberContainer>
            <NoticeSearchBar
            ref={addMember.searchRef}
            searchFn={addMember.searchSubmit}
            />
            <S.AddMemberBox>
                <S.AddMemberTitle>
                    <ChevronLeft color="labelNormal" $svgStyle={{cursor:"pointer"}}/>
                    <p>멤버추가</p>
                </S.AddMemberTitle>
                <S.AddMemberDataBox>
                    <ErrorBoundary text="데이터를 불러오지 못했습니다." showButton={true}>
                        <Suspense>
                            <AddMemberItem id={groupId}/>
                        </Suspense>
                    </ErrorBoundary>
                </S.AddMemberDataBox>
                <S.AddMemberButton>
                        <DodamFilledButton 
                          backgroundColorType="Assisitive"
                          text="전체취소"
                          size="Large"
                          width={100}
                          typography={['Body1', 'Medium']}
                          onClick={() => console.log("")}
                          textTheme="labelNetural"
                          />
                        <DodamFilledButton 
                           backgroundColorType="Primary"
                           text="추가"
                           size="Large"
                           width={100}
                           typography={['Body1', 'Bold']}
                           onClick={() => console.log("")}
                           textTheme="staticWhite"
                        />
                    </S.AddMemberButton>
            </S.AddMemberBox>
        </S.AddMemberContainer>
    )
}

export default AddMember;