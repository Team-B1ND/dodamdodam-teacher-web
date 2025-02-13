import NoticeSidebar from "../../Notice/NoticeSidebar/index";
import { Outlet } from "react-router-dom";
import styled from "styled-components";


const NoticePageTemplate = () => {

  return (
    <NoticContainer>
        <Outlet /> 
        <NoticeSidebar title="카테고리를 선택해보세요!" />
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
  background-color: ${({theme})=> theme.backgroundAlternative};
`;