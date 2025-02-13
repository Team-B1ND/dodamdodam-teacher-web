import React from "react";
import * as S from "./style";
import { NOTICE_SIDEBAR_ITEMS } from "constants/Notice/notice.constant";
import { NoticeSidebarType } from "types/Notice/notice.type";
import { DodamSegmentedButton } from "@b1nd/dds-web";

const NoticeSidebar = ({ title }: NoticeSidebarType) => {
  return (
    <S.NoticeSidebarWrap>
      <DodamSegmentedButton
        num={NOTICE_SIDEBAR_ITEMS.length}
        type="block"
        data={NOTICE_SIDEBAR_ITEMS}
        width={404}
        height={50}
        textColor="staticWhite"
        customBackbgroundColor="primaryNormal"
        customBackbgroundWrapColor="staticWhite"
      />
      <S.CategoryWrap>
        <S.Title>{title}</S.Title>
        <S.Category>
          {Array.from({ length: 10 }).map(() => (
            <S.CategoryTag>카테고리</S.CategoryTag>
          ))}
        </S.Category>
        <S.Button>완료</S.Button>
      </S.CategoryWrap>
    </S.NoticeSidebarWrap>
  );
};
export default NoticeSidebar;
