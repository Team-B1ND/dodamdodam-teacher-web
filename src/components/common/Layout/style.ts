import styled from "styled-components";

const pathname = window.location.pathname;

export const Container = styled.div`
  padding-top: ${pathname !== "/" && "80px"};
  padding-left: ${pathname !== "/" && "208px"};
`;
