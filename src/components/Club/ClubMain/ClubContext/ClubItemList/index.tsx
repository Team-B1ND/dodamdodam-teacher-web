import { ClubResponse } from "types/Club/club.type";
import ClubItem from "./ClubItem";
import useFetchClubs from "hooks/Club/useFetchClubs";
import { useState } from "react";
import * as S from "./style";
import { DodamCheckBox } from "@b1nd/dds-web";
import { ClubLine } from "./ClubItem/style";

const ClubItemList = (props: { item: string }) => {
  const { clubs } = useFetchClubs();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <S.ClubItemWrap>
        <S.WrapCheckBox>
          <DodamCheckBox onClick={handleCheckboxClick} isDisabled={isChecked} />
        </S.WrapCheckBox>

        <S.WrapClubName>동아리명</S.WrapClubName>

        <S.SubjectClub>주제</S.SubjectClub>

        <S.ShortDescription>설명</S.ShortDescription>

        <S.WhoClubLeader>부장</S.WhoClubLeader>
        <S.StateClub />
        <S.DetailClubContext>상태</S.DetailClubContext>
      </S.ClubItemWrap>
      <ClubLine/>

      {clubs &&
        clubs?.map((item: ClubResponse, index: number) =>
          item.type === props.item ? (
            <ClubItem key={item.id} value={item} />
          ) : (
            <></>
          )
        )}
    </div>
  );
};

export default ClubItemList;
