import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  return <Container pathname={pathname}>{children}</Container>;
};

export default Layout;

const Container = styled.div<{ pathname: string }>`
  width: 100%;
  height: 100vh;
  padding-top: ${({ pathname }) => pathname !== "/" && "80px"};
  padding-left: ${({ pathname }) => pathname !== "/" && "208px"};
`;
