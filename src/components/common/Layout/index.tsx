import { ReactNode } from "react";
import { Container } from "./style";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Layout;
