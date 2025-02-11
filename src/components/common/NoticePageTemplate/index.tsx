import NoticeSidebar from "../../Notice/NoticeSidebar/index";
import { Outlet } from "react-router-dom";



const NoticePageTemplate = () => {

  return (
    <>
      <NoticeSidebar />
        <Outlet /> 
    </>
  );
};

export default NoticePageTemplate;