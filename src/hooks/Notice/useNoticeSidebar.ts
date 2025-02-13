import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PageDataType } from "types/Notice/notice.type";

export const useNoticeSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [pageData, setPageData] = useState<PageDataType[]>([
    { text: "공지", isAtv: false },
    { text: "공지 작성", isAtv: false },
    { text: "그룹", isAtv: false },
  ]);

  const handleClickPageButton = (text?: string) => {
    switch (text) {
      case "공지":
        navigate("/notice");
        break;
      case "공지 작성":
        navigate("/notice/write");
        break;
      case "그룹":
        navigate("/notice/group");
        break;
    }
  };

  useEffect(() => {
    setPageData((prevData) =>
      prevData.map((item) => {
        if (
          (pathname === "/notice" && item.text === "공지") ||
          (pathname === "/notice/write" && item.text === "공지 작성") ||
          (pathname !== "/notice" &&
            pathname !== "/notice/write" &&
            item.text === "그룹")
        ) {
          return { ...item, isAtv: true };
        }
        return { ...item, isAtv: false };
      })
    );
  }, [pathname]);

  return {
    pageData,
    categoryList,
    handleClickPageButton,
  };
};
