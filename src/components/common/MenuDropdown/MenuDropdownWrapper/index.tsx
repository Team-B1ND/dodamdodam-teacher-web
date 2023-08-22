import { Children, useState } from "react";
import * as S from "./style";
import { GoTriangleDown } from "react-icons/go";
import { MenuDropdownWrapperProps } from "./types";

const MenuDropdownWrapper = ({ title, children }: MenuDropdownWrapperProps) => {
  const [close, setClose] = useState(true);

  return (
    <S.MenuDropdownWrapperContainer
      style={{
        height: close
          ? 40
          : 40 * (Children.count(children) + 1) + 5 * Children.count(children),
      }}
    >
      <S.MenuDropdownWrapperTitleWrap
        onClick={() => {
          setClose((prev) => !prev);
        }}
      >
        {title}
        <S.MenuDropdownWrapperTitleIcon close={close}>
          <GoTriangleDown />
        </S.MenuDropdownWrapperTitleIcon>
      </S.MenuDropdownWrapperTitleWrap>
      {children && (
        <S.MenuDropdownWrapperChildWrap>
          {children}
        </S.MenuDropdownWrapperChildWrap>
      )}
    </S.MenuDropdownWrapperContainer>
  );
};

export default MenuDropdownWrapper;
