import * as S from "./style";

const NoClub = () => {
  return (
    <S.NoClubContainer>
      <S.NoClubFont>아직 승인 요청한 동아리가 없습니다!</S.NoClubFont>
      <S.NoClubDetailFont>
        <div>혹시 아직 동아리 개설 기간 설정을 안 하셨다면,</div>
        <div>오른쪽에서 부탁드려요!</div>
      </S.NoClubDetailFont>
    </S.NoClubContainer>
  );
};
export default NoClub;
