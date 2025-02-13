import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { SelectCategoryAtom, SelectCategoryListAtom } from "stores/Division/division.store";
import { useGetDivisionList } from "queries/Division/division.query";
import { PageDataType } from "types/Notice/notice.type";
import { DivisionType } from "types/Division/division.type";

export const useNoticeSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [lastId, setLastId] = useState<number>(0);
  const [keyword, setKeyword] = useState<string>("");
  const { data: CategoryData } = useGetDivisionList(lastId, 20, keyword);
  const [categoryList, setCategoryList] = useState<DivisionType[]>([]);

  const [selectCategory, setSelectCategory] = useRecoilState<string>(SelectCategoryAtom);
  const [selectCategoryList, setSelectCategoryList] = useRecoilState<string[]>(SelectCategoryListAtom);
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

  const handleChangeCategory = (isWrite: boolean, name: string) => {
    if (isWrite) {
      setSelectCategoryList((prev) =>
        prev.includes(name)
          ? prev.filter((item) => item !== name)
          : [...prev, name]
      );
      setCategoryList((prev) =>
        prev.map((item) => ({
          ...item,
          isAtv: item.name === name ? !item.isAtv : item.isAtv,
        }))
      );
    } else {
      setSelectCategory(name);
      setCategoryList((prev) =>
        prev.map((item) => ({ ...item, isAtv: item.name === name }))
      );
    }
  };

  useEffect(() => {
    if (CategoryData?.data) {
      setCategoryList(
        CategoryData.data.map((item) => ({ ...item, isAtv: false }))
      );
    }
  }, [CategoryData]);

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
    handleChangeCategory,
  };
};
