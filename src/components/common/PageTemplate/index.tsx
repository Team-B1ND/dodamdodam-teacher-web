import { useLocation } from "react-router-dom";
import Layout from "../Layout";
import { ProvidersProps } from "../Provider/types";
import Header from "../Header";
import SideBar from "../SideBar";

export default function PageTemplate({ children }: ProvidersProps) {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/" && <Header />}
      {pathname !== "/" && <SideBar />}
      <Layout>{children}</Layout>
    </>
  );
}
