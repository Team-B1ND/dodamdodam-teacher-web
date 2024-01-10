import { Dispatch, SetStateAction, useState } from "react";
import AuthButton from "../../../common/AuthButton";
import CheckBox from "../../../common/CheckBox";
import TextField from "../../../common/TextField";
import { AccountContainer } from "../style";
import { IoIosArrowBack } from "react-icons/io";
import * as S from "./style";

interface SignupEmailProps {
  setSection: Dispatch<SetStateAction<string>>;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const Email = ({ setSection, setIsLogin }: SignupEmailProps) => {
  const [test, setTest] = useState(true);
  const [test2, setTest2] = useState(true);
  return (
    <div>
      <TextField>E-mail</TextField>
      <TextField>전화번호 ex) 01012341234</TextField>
      <TextField>이름 ex) 홍길동</TextField>
      <S.CheckBoxWrap>
        <CheckBox isChecked={test} setIsChecked={setTest}>
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
        <CheckBox isChecked={test2} setIsChecked={setTest2}>
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
        <AuthButton width={125} top={55} AuthButtonType="agree">
          Sign Up
        </AuthButton>
      </S.AuthButtonWrap>

      <AccountContainer>
        이미 계정이 있으신가요?<p onClick={() => setIsLogin(true)}>Sign In</p>
      </AccountContainer>
    </div>
  );
};

export default Email;
