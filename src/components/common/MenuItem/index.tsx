import { useLocation, useNavigate } from "react-router-dom";
import { MenuItemProps } from "./types";
import { MenuItemContainer } from "./style";

const MenuItem = ({ title, redirectUrl }: MenuItemProps) => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  return (
    <MenuItemContainer
      isArrival={redirectUrl === pathname}
      onClick={() => navigate(redirectUrl)}
    >
      {title}
    </MenuItemContainer>
  );
};

export default MenuItem;
