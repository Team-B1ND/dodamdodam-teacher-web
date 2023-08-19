import { Children, useState } from "react";
import {
  MenuDropdownWrapperChildWrap,
  MenuDropdownWrapperContainer,
  MenuDropdownWrapperTitleIcon,
  MenuDropdownWrapperTitleWrap,
} from "./style";
import { GoTriangleDown } from "react-icons/go";
import { MenuDropdownWrapperProps } from "./types";

const MenuDropdownWrapper = ({ title, children }: MenuDropdownWrapperProps) => {
  const [close, setClose] = useState(true);

  return (
    <MenuDropdownWrapperContainer
      style={{
        height: close
          ? 40
          : 40 * (Children.count(children) + 1) + 5 * Children.count(children),
      }}
    >
      <MenuDropdownWrapperTitleWrap
        onClick={() => {
          setClose((prev) => !prev);
        }}
      >
        {title}
        <MenuDropdownWrapperTitleIcon close={close}>
          <GoTriangleDown />
        </MenuDropdownWrapperTitleIcon>
      </MenuDropdownWrapperTitleWrap>
      {children && (
        <MenuDropdownWrapperChildWrap>{children}</MenuDropdownWrapperChildWrap>
      )}
    </MenuDropdownWrapperContainer>
  );
};

export default MenuDropdownWrapper;
