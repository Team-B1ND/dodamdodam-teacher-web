import { ReactNode } from "react";
import { Container } from "./style";
import { useLocation } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Layout;
