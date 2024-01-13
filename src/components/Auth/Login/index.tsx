import * as S from "./style";
import AuthButton from "../../common/AuthButton";
import TextField from "../../common/TextField";
import { Dispatch, SetStateAction } from "react";
import { useLogin } from "../../../hooks/auth/useLogin";
import { IoEyeSharp } from "react-icons/io5";

interface LoginProps {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setIsLogin }: LoginProps) => {
  const { handleLoginChange, onLogin, handlePasswordView, passwordType } =
    useLogin();
  return (
    <S.LoginWrap>
      <TextField onChange={handleLoginChange} id="id" name="id" functions="pw">
        ID
      </TextField>
      <S.PasswordBox>
        <TextField
          onChange={handleLoginChange}
          functions={onLogin}
          id="pw"
          name="pw"
          type={passwordType.type}
        >
          비밀번호
        </TextField>
        <S.PasswordViewBox onClick={() => handlePasswordView()}>
          <IoEyeSharp />
        </S.PasswordViewBox>
      </S.PasswordBox>

      <AuthButton width={350} top={85} AuthButtonType="agree" onClick={onLogin}>
        Sign In
      </AuthButton>
      <S.AccountContainer>
        아직 계정이 없으신가요?<p onClick={() => setIsLogin(false)}>Sign Up</p>
      </S.AccountContainer>
    </S.LoginWrap>
  );
};

export default Login;
