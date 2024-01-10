import * as S from "./style";
import AuthButton from "../../common/AuthButton";
import TextField from "../../common/TextField";

const Login = () => {
  return (
    <div>
      <TextField>ID</TextField>
      <TextField>비밀번호</TextField>
      <AuthButton width={350} top={85} AuthButtonType="agree">
        Sign In
      </AuthButton>
      <S.AccountContainer>
        아직 계정이 없으신가요?<p>Sign Up</p>
      </S.AccountContainer>
    </div>
  );
};

export default Login;
