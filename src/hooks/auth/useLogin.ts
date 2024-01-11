import { sha512 } from "js-sha512";
import { useCallback, useState } from "react";
import { LoginParam } from "../../repositories/Auth/Login/login.repository";
import LoginRepositoryImpl from "../../repositories/Auth/Login/login.repositoryImpl";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import Token from "../../libs/Token/Token";
import {
  REFRESH_TOKEN_KEY,
  ACCESS_TOKEN_KEY,
} from "../../constants/Token/Token.constant";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<LoginParam>({
    id: "",
    pw: "",
  });

  const handleLoginChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setLoginData((prev) => ({ ...prev, [name]: value }));
    },
    [setLoginData]
  );

  const onLogin = useCallback(async () => {
    const { id, pw } = loginData;
    if (id === "") {
      B1ndToast.showInfo("아이디를 입력해주세요");
      return;
    }
    if (pw === "") {
      B1ndToast.showInfo("비밀번호를 입력해주세요");
      return;
    }

    const validLoginData: LoginParam = {
      id,
      pw: sha512(pw),
    };
    try {
      const {
        data: { member, token: accessToken, refreshToken },
      } = await LoginRepositoryImpl.postLogin(validLoginData);

      Token.setToken(ACCESS_TOKEN_KEY, accessToken);
      Token.setToken(REFRESH_TOKEN_KEY, refreshToken);
      navigate("/member");
      B1ndToast.showSuccess("로그인 성공");
    } catch (e) {
      B1ndToast.showError("로그인 실패");
    }
  }, [loginData]);

  return {
    onLogin,
    handleLoginChange,
  };
};
