import { ReactNode } from "react";
import NoticeMain from "components/Notice/NoticeMain";
import NoticeDetail from "components/Notice/NoticeDetail/index";
import { useNotice } from "hooks/Notice/useNotice";
import { NoticeContainer } from "./style";

const NoticePage = () => {
  const { section, openDetail, goBackToMain, selectedNotice } = useNotice();

  const NoticeComponents: Record<string, ReactNode> = {
    main: <NoticeMain openDetail={openDetail} />,
    detail: <NoticeDetail notice={selectedNotice} goBackToMain={goBackToMain}/>,
  };

  return <NoticeContainer>{NoticeComponents[section] || <NoticeMain openDetail={openDetail} />}</NoticeContainer>;
};

export default NoticePage;
