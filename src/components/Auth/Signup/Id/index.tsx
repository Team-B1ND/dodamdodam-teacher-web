import AuthButton from "../../../common/AuthButton";
import TextField from "../../../common/TextField";
import { IoIosArrowForward } from "react-icons/io";
import { ButtonContainer } from "./style";
import { AccountContainer } from "../style";
import { Dispatch, SetStateAction } from "react";
import { PasswordBox, PasswordViewBox } from "../../Signin/style";
import { IoEyeSharp } from "react-icons/io5";
import { PasswordParm } from "../../../../repositories/Auth/Signin/SigninRepository";
import { MemberSignUpParam } from "repositories/Member/MemberRepository";

interface SignupIdProps {
  passwordType: PasswordParm;
  signupData: MemberSignUpParam;
  setSection: Dispatch<SetStateAction<string>>;
  setIsSignin: Dispatch<SetStateAction<boolean>>;
  handleSignupChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordView: () => void;
  signupTypeCheck: () => void;
}

const Id = ({
  setIsSignin,
  handleSignupChange,
  handlePasswordView,
  passwordType,
  signupTypeCheck,
  signupData,
}: SignupIdProps) => {
  return (
    <div>
      <TextField
        id="id"
        name="id"
        onChange={handleSignupChange}
        functions="pw"
        value={signupData.id}
      >
        ID
      </TextField>
      <PasswordBox>
        <TextField
          id="pw"
          name="pw"
          onChange={handleSignupChange}
          type={passwordType.type}
          functions="position"
          value={signupData.pw}
        >
          비밀번호
        </TextField>
        <PasswordViewBox onClick={() => handlePasswordView()}>
          <IoEyeSharp />
        </PasswordViewBox>
      </PasswordBox>
      <TextField
        id="position"
        name="position"
        onChange={handleSignupChange}
        functions="tel"
        value={signupData.position}
      >
        직책 ex) 정보부장
      </TextField>
      <TextField
        id="tel"
        name="tel"
        onChange={handleSignupChange}
        value={signupData.tel}
      >
        내선번호 ex) 0532310000
      </TextField>

      <ButtonContainer>
        <AuthButton
          width={125}
          top={55}
          AuthButtonType="agree"
          onClick={() => signupTypeCheck()}
        >
          다음
          <IoIosArrowForward style={{ marginLeft: "10px", fontSize: "15px" }} />
        </AuthButton>
      </ButtonContainer>
      <AccountContainer>
        이미 계정이 있으신가요?<p onClick={() => setIsSignin(true)}>Sign In</p>
      </AccountContainer>
    </div>
  );
};

export default Id;
