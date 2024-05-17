import { Dispatch, SetStateAction } from "react";
import AuthButton from "components/common/AuthButton";
import CheckBox from "components/common/CheckBox";
import TextField from "components/common/TextField";
import { AccountContainer } from "../style";
import { IoIosArrowBack } from "react-icons/io";
import * as S from "./style";

interface SignupEmailProps {
  policy: boolean;
  personalInfo: boolean;
  setPolicy: Dispatch<SetStateAction<boolean>>;
  setPersonalInfo: Dispatch<SetStateAction<boolean>>;
  setSection: Dispatch<SetStateAction<string>>;
  setIsSignin: Dispatch<SetStateAction<boolean>>;
  handleSignupChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSignup: () => void;
}

const Email = ({
  setSection,
  setIsSignin,
  handleSignupChange,
  onSignup,

  setPolicy,
  policy,
  setPersonalInfo,
  personalInfo,
}: SignupEmailProps) => {
  return (
    <div>
      <TextField
        id="email"
        name="email"
        functions="phone"
        onChange={handleSignupChange}
      >
        E-mail
      </TextField>
      <TextField
        id="phone"
        name="phone"
        functions="name"
        onChange={handleSignupChange}
      >
        전화번호 ex) 01012341234
      </TextField>
      <TextField id="name" name="name" onChange={handleSignupChange}>
        이름 ex) 홍길동
      </TextField>
      <S.CheckBoxWrap>
        <CheckBox isChecked={policy} setIsChecked={setPolicy}>
          운영정책 동의
        </CheckBox>
        <S.CheckContent
          target="_blank"
          href="https://dodam.b1nd.com/detailed-information/service-policy"
        >
          상세 내용 보기
        </S.CheckContent>
      </S.CheckBoxWrap>
      <S.CheckBoxWrap>
        <CheckBox isChecked={personalInfo} setIsChecked={setPersonalInfo}>
          개인정보 취급방침 동의
        </CheckBox>
        <S.CheckContent href="https://dodam.b1nd.com/detailed-information/personal-information">
          상세 내용 보기
        </S.CheckContent>
      </S.CheckBoxWrap>

      <S.AuthButtonWrap>
        <AuthButton
          width={125}
          top={55}
          AuthButtonType="cancel"
          onClick={() => setSection("id")}
        >
          <IoIosArrowBack style={{ marginRight: "10px", fontSize: "15px" }} />
          이전
        </AuthButton>
        <AuthButton
          width={125}
          top={55}
          AuthButtonType="agree"
          onClick={onSignup}
        >
          Sign Up
        </AuthButton>
      </S.AuthButtonWrap>

      <AccountContainer>
        이미 계정이 있으신가요?<p onClick={() => setIsSignin(true)}>Sign In</p>
      </AccountContainer>
    </div>
  );
};

export default Email;
