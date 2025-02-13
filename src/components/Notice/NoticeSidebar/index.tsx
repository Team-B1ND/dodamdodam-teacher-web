import * as S from "./style";
import { NoticeSidebarType } from "types/Notice/notice.type";
import { DodamSegmentedButton } from "@b1nd/dds-web";
import { useNoticeSidebar } from "hooks/Notice/useNoticeSidebar";

const NoticeSidebar = ({ title, isWrite }: NoticeSidebarType) => {
  const {
    pageData,
    categoryList,
    handleClickPageButton,
    handleChangeCategory,
    handleClickSubmit,
  } = useNoticeSidebar();

  return (
    <S.NoticeSidebarWrap>
      <DodamSegmentedButton
        num={pageData.length}
        type="block"
        data={pageData}
        width={404}
        height={50}
        onClick={handleClickPageButton}
        textColor="staticWhite"
        customBackbgroundColor="primaryNormal"
        customBackbgroundWrapColor="staticWhite"
      />
      <S.CategoryWrap>
        <S.Title>{isWrite ? <>공지를 보낼<br />카테고리를 선택해주세요</> : title}
        </S.Title>
        <S.Category>
          {categoryList?.map((item) => (
            <S.CategoryTag
              key={item.id}
              isAtv={item.isAtv}
              onClick={() => handleChangeCategory(isWrite, item.name)}>
              {item.name}
            </S.CategoryTag>
          ))}
        </S.Category>
        {isWrite && <S.Button onClick={handleClickSubmit}> 완료</S.Button>}
      </S.CategoryWrap>
    </S.NoticeSidebarWrap>
  );
};
export default NoticeSidebar;
