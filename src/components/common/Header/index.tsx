import * as S from "./style";
import dgsw from "../../../assets/dgsw.svg";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../../hooks/auth/useLogout";
import { useGetMyMemberQuery } from "queries/Member/member.query";

const Header = () => {
  const navigate = useNavigate();
  const { handleLogoutClick } = useLogout();
  const { data: myInfo } = useGetMyMemberQuery();

  return (
    <S.HeaderContainer>
      <S.HeaderMain>
        <S.HeaderLogo>
          <S.HeaderTitle
            onClick={() => (window.location.href = "https://dodam.b1nd.com")}
          >
            도담도담
          </S.HeaderTitle>
          <S.HeaderText>Teacher</S.HeaderText>
        </S.HeaderLogo>
        <S.HeaderLogoutContainer>
          <p>{myInfo?.data.name} 님</p>
          <button onClick={handleLogoutClick}>로그아웃</button>
        </S.HeaderLogoutContainer>
      </S.HeaderMain>
      <S.DgswImage src={dgsw} alt="이미지 없음" />
    </S.HeaderContainer>
  );
};

export default Header;
