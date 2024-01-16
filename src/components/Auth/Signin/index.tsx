import * as S from "./style";
import AuthButton from "../../common/AuthButton";
import TextField from "../../common/TextField";
import { Dispatch, SetStateAction } from "react";
import { useSignin } from "../../../hooks/auth/useSignin";
import { IoEyeSharp } from "react-icons/io5";

interface SigninProps {
  setIsSignin: Dispatch<SetStateAction<boolean>>;
}

const Signin = ({ setIsSignin }: SigninProps) => {
  const { handleSigninChange, submitSignin, handlePasswordView, passwordType } =
    useSignin();
  return (
    <S.SigninWrap>
      <TextField onChange={handleSigninChange} id="id" name="id" functions="pw">
        ID
      </TextField>
      <S.PasswordBox>
        <TextField
          onChange={handleSigninChange}
          functions={submitSignin}
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

      <AuthButton
        width={350}
        top={85}
        AuthButtonType="agree"
        onClick={submitSignin}
      >
        Sign In
      </AuthButton>
      <S.AccountContainer>
        아직 계정이 없으신가요?<p onClick={() => setIsSignin(false)}>Sign Up</p>
      </S.AccountContainer>
    </S.SigninWrap>
  );
};

export default Signin;
