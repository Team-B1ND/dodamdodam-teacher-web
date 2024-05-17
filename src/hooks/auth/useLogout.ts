import Token from "libs/Token/Token";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    Token.clearToken();
    navigate("/");
  };

  return { handleLogoutClick };
};
