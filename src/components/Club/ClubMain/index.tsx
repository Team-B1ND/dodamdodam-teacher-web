import ClubItemList from "./ClubContext/ClubItemList";
import * as S from "./style";
import { useGetTimeQuery } from "queries/Club/club.query";

const ClubMain = () => {
  
  const { data, isLoading } = useGetTimeQuery();

  const date = new Date();
  const today = date.toLocaleDateString().replace(/. /g, "-0").replace(".", "");

  if (isLoading) return <div>Loading...</div>;

  return (
    <S.ClubMainContainer>
      <S.ClubManageFont>동아리 관리</S.ClubManageFont>
      <S.MainClubListContainer>
        <ClubItemList
          itemType="CREATIVE_ACTIVITY_CLUB"
          isEnded={data!.createEnd > today}
        />
      </S.MainClubListContainer>
    </S.ClubMainContainer>
  );
};

export default ClubMain;

