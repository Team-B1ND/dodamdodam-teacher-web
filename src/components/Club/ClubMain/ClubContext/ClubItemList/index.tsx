import SkeletonComponent from "components/common/Skeleton";
import ClubItem from "./ClubItem";
import { useState, Dispatch, SetStateAction, useEffect } from "react";
import * as S from "./style";
import { DodamCheckBox, DodamErrorBoundary } from "@b1nd/dds-web";
import { useGetClubDateQuery } from "queries/Club/club.query";
import { ClubLine } from "./ClubItem/style";
import NoClub from "../NoClub";

interface ClubItemListProps {
  itemType: "CREATIVE_ACTIVITY_CLUB" | "SELF_DIRECT_ACTIVITY_CLUB";
  selectedClubIds: number[];
  setSelectedClubIds: Dispatch<SetStateAction<number[]>>;
  isClicked: boolean;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
  isEnded: boolean;
}

const ClubItemList = ({
  itemType,
  selectedClubIds,
  setSelectedClubIds,
  isClicked,
  setIsClicked,
  isEnded,
}: ClubItemListProps) => {
  const { data, isLoading } = useGetClubDateQuery();

  const validClubs =
    data?.data?.filter((club) => club !== null && club !== undefined) || [];
  const filteredClubs = validClubs.filter((club) => club.type === itemType);

  useEffect(() => {
    const currentTypeClubIds = filteredClubs.map((club) => club.id);
    const selectedCurrentTypeClubs = selectedClubIds.filter((id) =>
      currentTypeClubIds.includes(id)
    );
    const allSelected =
      selectedCurrentTypeClubs.length === currentTypeClubIds.length &&
      currentTypeClubIds.length > 0;
    setIsClicked(allSelected);
  }, [selectedClubIds, filteredClubs]);

  const allClickedButton = () => {
    const newIsClicked = !isClicked;
    if (newIsClicked) {
      const currentTypeClubIds = filteredClubs.map((club) => club.id);
      setSelectedClubIds((prev) => [
        ...prev.filter((id) => !currentTypeClubIds.includes(id)),
        ...currentTypeClubIds,
      ]);
    } else {
      const currentTypeClubIds = filteredClubs.map((club) => club.id);
      setSelectedClubIds((prev) =>
        prev.filter((id) => !currentTypeClubIds.includes(id))
      );
    }
    setIsClicked(newIsClicked);
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
        {isEnded ? (
          <S.DetailClubContext>상태</S.DetailClubContext>
        ) : (
          <S.DetailClubContext>담당자</S.DetailClubContext>
        )}
      </S.ClubItemWrap>
      <ClubLine />
      <DodamErrorBoundary text="에러 발생" showButton={true}>
        {isLoading ? (
          <SkeletonComponent length={10} height={48} />
        ) : validClubs?.some((value) => value?.type === itemType && value.state === "ALLOWED" || value.state == "PENDING") ? (
          validClubs.map((value) =>
            value?.type === itemType ? (
              <ClubItem
                key={value.id}
                value={value}
                isEnded={isEnded}
                selectedClubIds={selectedClubIds}
                setSelectedClubIds={setSelectedClubIds}
              />
            ) : null
          )
        ) : (
          <NoClub/>
                )}
      </DodamErrorBoundary>
    </>
  );
};

export default ClubItemList;
