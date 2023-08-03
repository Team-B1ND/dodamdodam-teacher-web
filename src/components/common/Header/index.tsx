import React from "react";
import * as S from "./style";
import dgsw from "@src/assets/dgsw.svg";
import { useNavigate } from "react-router-dom";
import { useLogout } from "@src/hooks/Auth/useLogout";

const Header = () => {
  const navigate = useNavigate();
  const { handleLogoutClick } = useLogout();
  return (
    <S.HeaderContainer>
      <S.HeaderMain>
        <S.HeaderLogo onClick={() => navigate("/")}>
          <S.HeaderTitle>도담도담</S.HeaderTitle>
          <S.HeaderText>Teacher</S.HeaderText>
        </S.HeaderLogo>
        <S.UserLogoutContainer>
          <p>{"관리자"} 님</p>
          <button onClick={handleLogoutClick}>로그아웃</button>
        </S.UserLogoutContainer>
      </S.HeaderMain>
      <S.DgswImage src={dgsw} alt="이미지 없음" />
    </S.HeaderContainer>
  );
};

export default Header;
