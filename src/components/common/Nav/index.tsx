import React from "react";
import styled from "styled-components";

const Nav = () => {
  return <NavContainer>Nav</NavContainer>;
};

export default Nav;

const NavContainer = styled.div`
  width: 208px;
  height: calc(100vh - 80px);
  position: fixed;
  top: 80px;
  left: 0;

  border: 1px solid black;
`;
