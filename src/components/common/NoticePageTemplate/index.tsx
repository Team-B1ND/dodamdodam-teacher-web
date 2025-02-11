import NoticeSidebar from "../../Notice/NoticeSidebar/index";
import { Outlet } from "react-router-dom";
import styled from "styled-components";


const NoticePageTemplate = () => {

  return (
    <NoticContainer>
        <Outlet /> 
        <NoticeSidebar />
    </NoticContainer>
  );
};

export default NoticePageTemplate;


export const NoticContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 2.5rem;
  white-space: nowrap;
`;