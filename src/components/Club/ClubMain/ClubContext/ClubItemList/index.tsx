import SkeletonComponent from "components/common/Skeleton";
import ClubItem from "./ClubItem";
import * as S from "./style";
import { DodamErrorBoundary } from "@b1nd/dds-web";
import { useGetClubDateQuery } from "queries/Club/club.query";
import { ClubLine } from "./ClubItem/style";
import NoClub from "../NoClub";

interface ClubItemListProps {
  itemType: "CREATIVE_ACTIVITY_CLUB" | "SELF_DIRECT_ACTIVITY_CLUB";
  isEnded: boolean;
}

const ClubItemList = ({
  itemType,
  isEnded,
}: ClubItemListProps) => {
  const { data, isLoading } = useGetClubDateQuery();
  const validClubs =
    data?.data?.filter((club) => club !== null && club !== undefined) || [];

  return (
    <>
      <S.ClubItemWrap>
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
        ) : validClubs?.some((value) => value?.type === itemType) ? (
          validClubs.map((value) =>
            value?.type === itemType ? (
              <ClubItem
                key={value.id}
                value={value}
                isEnded={isEnded}
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
