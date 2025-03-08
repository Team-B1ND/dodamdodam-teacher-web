import SkeletonComponent from "components/common/Skeleton";
import ClubItem from "./ClubItem";
import { useState, Dispatch, SetStateAction, useEffect } from "react";
import * as S from "./style";
import { DodamCheckBox, DodamErrorBoundary } from "@b1nd/dds-web";
import { useClubMutation, useGetClubDateQuery } from "queries/Club/club.query";
import { ClubLine } from "./ClubItem/style";

interface ClubItemListProps {
  itemType: "CREATIVE_ACTIVITY_CLUB" | "SELF_DIRECT_ACTIVITY_CLUB";
  selectedClubIds: number[];
  setSelectedClubIds: Dispatch<SetStateAction<number[]>>;
  isClicked: boolean;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
  isEnded : boolean
}

const ClubItemList = ({
  itemType,
  selectedClubIds,
  setSelectedClubIds,
  isClicked,
  setIsClicked,
  isEnded,
}: ClubItemListProps) => {
  const { data,isLoading } = useGetClubDateQuery();
  const validClubs = data?.data?.filter((club) => club !== null && club !== undefined) || [];

  const allClickedButton = () => {
    setIsClicked((prev) => {
      const newIsClicked = !prev;
      setSelectedClubIds(newIsClicked
        ? validClubs.filter(club => club.type === itemType).map(club => club.id)
        : []
      );
      return newIsClicked;
    });
  };

  return (
    <>
      <S.ClubItemWrap>
        {isEnded && (
            <S.WrapCheckBox>
              <DodamCheckBox onClick={allClickedButton} isDisabled={isClicked} />
            </S.WrapCheckBox>
        )}
        <S.WrapClubName>동아리명</S.WrapClubName>
        <S.SubjectClub>주제</S.SubjectClub>
        <S.ShortDescription>설명</S.ShortDescription>
        <S.WhoClubLeader>부장</S.WhoClubLeader>
        <S.StateClub />
        {isEnded
        ? (
          <S.DetailClubContext>상태</S.DetailClubContext>
        )
        : (
          <S.DetailClubContext>담당자</S.DetailClubContext>
        )}
      </S.ClubItemWrap>
      <ClubLine />
      <DodamErrorBoundary text="에러 발생" showButton={true}>
      { isLoading ? (
        <SkeletonComponent length={10} height={48} />
        ) : validClubs.length > 0 ? (
              validClubs.map((value) =>
                value?.type === itemType ? (
              <ClubItem key={value.id} value={value} isEnded={isEnded}/>
        ) : null
      )
    ) : (
        <p
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        >
      데이터가 없습니다
    </p>
  )}
</DodamErrorBoundary>
    </>
  );
};

export default ClubItemList;
