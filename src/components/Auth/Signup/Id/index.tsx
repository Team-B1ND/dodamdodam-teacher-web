import AuthButton from "../../../common/AuthButton";
import TextField from "../../../common/TextField";
import { IoIosArrowForward } from "react-icons/io";
import { ButtonContainer } from "./style";
import { AccountContainer } from "../style";
import { Dispatch, SetStateAction } from "react";
import { PasswordBox, PasswordViewBox } from "../../Login/style";
import { IoEyeSharp } from "react-icons/io5";
import { PasswordParm } from "../../../../repositories/Auth/Login/login.repository";

interface SignupIdProps {
  setSection: Dispatch<SetStateAction<string>>;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
  handleSignupChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordView: () => void;
  passwordType: PasswordParm;
}

const Id = ({
  setSection,
  setIsLogin,
  handleSignupChange,
  handlePasswordView,
  passwordType,
}: SignupIdProps) => {
  return (
    <div>
      <TextField id="id" name="id" onChange={handleSignupChange}>
        ID
      </TextField>
      <PasswordBox>
        <TextField
          id="pw"
          name="pw"
          onChange={handleSignupChange}
          type={passwordType.type}
        >
          비밀번호
        </TextField>
        <PasswordViewBox onClick={() => handlePasswordView()}>
          <IoEyeSharp />
        </PasswordViewBox>
      </PasswordBox>
      <TextField id="position" name="position" onChange={handleSignupChange}>
        직책 ex) 정보부장
      </TextField>
      <TextField id="tel" name="tel" onChange={handleSignupChange}>
        내선번호 ex) 0532310000
      </TextField>

      <ButtonContainer>
        <AuthButton
          width={125}
          top={55}
          AuthButtonType="agree"
          onClick={() => setSection("email")}
        >
          다음
          <IoIosArrowForward style={{ marginLeft: "10px", fontSize: "15px" }} />
        </AuthButton>
      </ButtonContainer>
      <AccountContainer>
        이미 계정이 있으신가요?<p onClick={() => setIsLogin(true)}>Sign In</p>
      </AccountContainer>
    </div>
  );
};

export default Id;
