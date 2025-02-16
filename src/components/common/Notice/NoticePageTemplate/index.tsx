import NoticeSidebar from "components/Notice/NoticeSidebar";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

const NoticePageTemplate = () => {
  const { pathname } = useLocation()

  return (
    <NoticContainer>
      <Outlet />
      <NoticeSidebar title="카테고리를 선택하여 공지를 확인해보세요!" isWrite={pathname === "/notice/write"} />
    </NoticContainer>
  );
};

export default NoticePageTemplate;

export const NoticContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 1rem 2.5rem;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.backgroundAlternative};
`;
