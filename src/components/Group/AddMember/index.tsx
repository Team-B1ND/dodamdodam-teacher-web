import { Dispatch, SetStateAction } from "react";
import NoticeSearchBar from "components/common/NoticeSearchbar";
import * as S from "./style";
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
  const { ...addMember } = useAddMember();
  return (
    <S.AddMemberContainer>
      <NoticeSearchBar
        ref={addMember.searchRef}
        searchFn={addMember.searchSubmit}
      />
      <S.AddMemberBox>
        <S.AddMemberTitle onClick={() => setSection("groupDetail")}>
          <ChevronLeft color="labelNormal" $svgStyle={{ cursor: "pointer" }} />
          <p>멤버추가</p>
        </S.AddMemberTitle>
        <S.AddMemberDataBox>
          <ErrorBoundary text="데이터를 불러오지 못했습니다." showButton={true}>
            <Suspense>
              <AddMemberItem
                id={groupId}
                groupMemberList={addMember.groupMemberList}
                handleClickGroup={addMember.handleClickGroup}
                handleClickAllMember={addMember.handleClickAllMember}
                handleClickMember={addMember.handleClickMember}
              />
            </Suspense>
          </ErrorBoundary>
        </S.AddMemberDataBox>
        <S.AddMemberButton>
          <DodamFilledButton
            backgroundColorType="Assisitive"
            customStyle={{ cursor: "pointer" }}
            text="전체취소"
            size="Large"
            width={100}
            typography={["Body1", "Medium"]}
            onClick={() => addMember.setMemberIdList([])}
            textTheme="labelNetural"
          />
          <DodamFilledButton
            backgroundColorType="Primary"
            customStyle={{ cursor: "pointer" }}
            text="추가"
            size="Large"
            width={100}
            typography={["Body1", "Bold"]}
            onClick={() => console.log("")}
            textTheme="staticWhite"
          />
        </S.AddMemberButton>
      </S.AddMemberBox>
    </S.AddMemberContainer>
  );
};

export default AddMember;
