import React from "react";
import styled from "styled-components";

const Header = () => {
  return <HeaderContainer>Header</HeaderContainer>;
};

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 80px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 50;
`;
