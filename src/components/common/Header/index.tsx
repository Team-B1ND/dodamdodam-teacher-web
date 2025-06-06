import React,{useEffect} from "react";
import * as S from "./style";
import dgsw from "assets/dgsw.svg";
import { useLogout } from "hooks/auth/useLogout";
import { useGetMyMemberQuery } from "queries/Member/member.query";
import { useRecoilState } from "recoil";
import { MyMemberInfoId } from "stores/Member/member.store"; 

const Header = () => {
  const { handleLogoutClick } = useLogout();
  const { data: myInfo } = useGetMyMemberQuery();
  const [, setMyMemberInfoId] = useRecoilState(MyMemberInfoId);

  useEffect(() => {
    if (myInfo?.data?.id) {
      setMyMemberInfoId(myInfo.data.id);
    }
  }, [myInfo, setMyMemberInfoId]);

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
