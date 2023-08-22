import SideBarDropdown from "./SideBarDropdown";
import * as S from "./style";

const SideBar = () => {
  return (
    <S.SideBarContainer>
      <S.SideBarWrap>
        <SideBarDropdown />
        <S.SideBarVersionWrap>
          <S.SideBarVersion>version: 7.0.0</S.SideBarVersion>
          <S.SideBarCorpText>ⓒ B1ND Team Corp.</S.SideBarCorpText>
        </S.SideBarVersionWrap>
      </S.SideBarWrap>
    </S.SideBarContainer>
  );
};

export default SideBar;
