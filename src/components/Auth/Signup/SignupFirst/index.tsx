import React from 'react';
import * as S from './style';
import { DodamFilledButton, DodamTextField } from '@b1nd/dds-web';
import { MemberSignUpParam } from 'repositories/Member/MemberRepository';

interface SignupFirstProps {
  error: MemberSignUpParam;
  signupData: MemberSignUpParam;
  handleSignupChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  signupTypeCheck: () => void;
}

const SignupFirst = ({ handleSignupChange, signupData, signupTypeCheck, error }: SignupFirstProps) => {
  return (
    <S.SignupWrap>
      <S.SignUpTitle>회원가입</S.SignUpTitle>
      <S.InputWrap>
        <DodamTextField
          onChange={handleSignupChange}
          id="email"
          name="email"
          type="text"
          value={signupData.email}
          label="이메일"
          width={400}
          isError={error.email !== ''}
          supportingText={error.email}
        />
        <DodamTextField
          onChange={handleSignupChange}
          id="position"
          name="position"
          type="text"
          value={signupData.position}
          label="직책"
          width={400}
          isError={error.position !== ''}
          supportingText={error.position}
        />
        <DodamTextField
          onChange={handleSignupChange}
          id="phone"
          name="phone"
          type="text"
          value={signupData.phone}
          label="전화번호"
          width={400}
          isError={error.phone !== ''}
          supportingText={error.phone}
        />
        <DodamTextField
          onChange={handleSignupChange}
          id="tel"
          name="tel"
          type="text"
          value={signupData.tel}
          label="내선 전화번호"
          width={400}
          isError={error.tel !== ''}
          supportingText={error.tel}
        />
        <DodamTextField
          onChange={handleSignupChange}
          id="name"
          name="name"
          type="text"
          value={signupData.name}
          label="이름"
          width={400}
          isError={error.name !== ''}
          supportingText={error.name}
        />
      </S.InputWrap>
      <DodamFilledButton
        backgroundColorType="Primary"
        text="다음"
        size="Large"
        width={400}
        typography={['Body1', 'Bold']}
        textTheme="staticWhite"
        onClick={() => signupTypeCheck()}
      />
    </S.SignupWrap>
  );
};

export default SignupFirst;
