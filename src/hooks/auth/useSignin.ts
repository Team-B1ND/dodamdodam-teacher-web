import { sha512 } from "js-sha512";
import { useCallback, useState } from "react";
import {
  SigninParam,
  PasswordParm,
} from "../../repositories/Auth/Signin/SigninRepository";
import signinRepositoryImpl from "../../repositories/Auth/Signin/SigninRepositoryImpl";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import Token from "../../libs/Token/Token";
import {
  REFRESH_TOKEN_KEY,
  ACCESS_TOKEN_KEY,
} from "../../constants/Token/Token.constant";
import { useNavigate } from "react-router-dom";

export const useSignin = () => {
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState<PasswordParm>({
    type: "password",
    visible: false,
  });
  const [signinData, setSigninData] = useState<SigninParam>({
    id: "",
    pw: "",
  });

  const handleSigninChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setSigninData((prev) => ({ ...prev, [name]: value }));
    },
    [setSigninData]
  );

  const submitSignin = async () => {
    const { id, pw } = signinData;
    if (id === "") {
      B1ndToast.showInfo("아이디를 입력해주세요");
      return;
    }
    if (pw === "") {
      B1ndToast.showInfo("비밀번호를 입력해주세요");
      return;
    }

    const validSigninData: SigninParam = {
      id,
      pw: sha512(pw),
    };
    try {
      const { member, accessToken, refreshToken } =
        await signinRepositoryImpl.postSignin(validSigninData);

      if (member.role !== "TEACHER" && member.role !== "ADMIN") {
        B1ndToast.showInfo("선셍님 계정으로 로그인 해주세요.");
        return;
      }

      Token.setToken(ACCESS_TOKEN_KEY, accessToken);
      Token.setToken(REFRESH_TOKEN_KEY, refreshToken);
      navigate("/member");
      B1ndToast.showSuccess("로그인 성공");
    } catch (e) {
      B1ndToast.showError("로그인 실패");
    }
  };

  const handlePasswordView = () => {
    setPasswordType(() => {
      if (!passwordType.visible) {
        return { type: "text", visible: true };
      }
      return { type: "password", visible: false };
    });
  };
  return {
    submitSignin,
    handleSigninChange,
    handlePasswordView,
    passwordType,
  };
};
