import { useRecoilValue } from "recoil";
import {
  HideHeaderAtom,
  HideSidebarAtom,
} from "../../stores/common/common.store";
import SideBar from "../common/SideBar";
import Layout from "../common/Layout";
import { ProvidersProps } from "../common/Provider/types";
import Header from "../common/Header";

export default function PageTemplate({ children }: ProvidersProps) {
  const hideHeader = useRecoilValue(HideHeaderAtom);
  const hideSidebar = useRecoilValue(HideSidebarAtom);

  return (
    <>
      {hideHeader && <Header />}
      {hideSidebar && <SideBar />}
      <Layout>{children}</Layout>
    </>
  );
}
