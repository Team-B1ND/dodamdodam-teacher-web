import * as S from "./style";
import AuthButton from "../../common/AuthButton";
import TextField from "../../common/TextField";
import { Dispatch, SetStateAction } from "react";
import { useLogin } from "../../../hooks/auth/useLogin";

interface LoginProps {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setIsLogin }: LoginProps) => {
  const { handleLoginChange, onLogin } = useLogin();
  return (
    <div>
      <TextField onChange={handleLoginChange} id="id" name="id">
        ID
      </TextField>
      <TextField onChange={handleLoginChange} id="pw" name="pw">
        비밀번호
      </TextField>
      <AuthButton width={350} top={85} AuthButtonType="agree" onClick={onLogin}>
        Sign In
      </AuthButton>
      <S.AccountContainer>
        아직 계정이 없으신가요?<p onClick={() => setIsLogin(false)}>Sign Up</p>
      </S.AccountContainer>
    </div>
  );
};

export default Login;
