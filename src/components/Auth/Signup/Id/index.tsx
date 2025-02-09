import { Dispatch, SetStateAction } from 'react';
import { MemberSignUpParam } from 'repositories/Member/MemberRepository';
import { PasswordParm } from 'repositories/Auth/AuthRepository';
import * as S from './style';
import { Checkmark, ChevronLeft, DodamFilledButton, DodamTextField } from '@b1nd/dds-web';

interface SignupIdProps {
  error: MemberSignUpParam;
  policy: boolean;
  personalInfo: boolean;
  passwordType: PasswordParm;
  signupData: MemberSignUpParam;
  setPolicy: Dispatch<SetStateAction<boolean>>;
  setPersonalInfo: Dispatch<SetStateAction<boolean>>;
  setSection: Dispatch<SetStateAction<string>>;
  setIsSignin: Dispatch<SetStateAction<boolean>>;
  handleSignupChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkAllRequired: () => void;
  submitSignup: () => void;
  pwCheck: string;
  setPwCheck: Dispatch<SetStateAction<string>>;
}

const Id = ({
  handleSignupChange,
  passwordType,
  signupData,
  error,
  policy,
  personalInfo,
  checkAllRequired,
  setPolicy,
  setPersonalInfo,
  submitSignup,
  setSection,
  pwCheck,
  setPwCheck,
}: SignupIdProps) => {
  return (
    <S.SignupWrap>
      <div onClick={() => setSection('id')} style={{ cursor: 'pointer' }}>
        <ChevronLeft size={16} color="#0083F0" />
      </div>
      <S.SignUpTitle>회원가입</S.SignUpTitle>
      <S.InputWrap>
        <DodamTextField
          onChange={handleSignupChange}
          id="id"
          name="id"
          type="text"
          value={signupData.id}
          label="아이디"
          width={400}
          supportingText="아이디는 영문과 숫자로 5 ~ 20글자 이내여야 해요."
        />
        <DodamTextField
          onChange={handleSignupChange}
          id="pw"
          name="pw"
          type="password"
          value={signupData.pw}
          label="비밀번호"
          width={400}
        />
        <DodamTextField
          onChange={(e) => setPwCheck(e.target.value)}
          id="pwCheck"
          name="pwCheck"
          type="password"
          value={pwCheck}
          label="비밀번호 확인"
          width={400}
        />
        <DodamFilledButton
          // leftIcon={<Checkmark />}
          backgroundColorType="Assisitive"
          width={400}
          onClick={checkAllRequired}
          size="Large"
          textTheme="labelNetural"
          typography={['Body1', 'Bold']}
          text="필수 항목 모두 체크하기"
        />
      </S.InputWrap>
      <S.CheckWrap>
        <S.CheckmarkWrap onClick={() => setPersonalInfo(!personalInfo)}>
          <Checkmark size={16} color={personalInfo ? '#0083F0' : '#808080'} />
          <p>[필수] 개인정보 수집 및 이용에 대한 안내 </p>
          <span>보기</span>
        </S.CheckmarkWrap>
        <S.CheckmarkWrap onClick={() => setPolicy(!policy)}>
          <Checkmark size={16} color={policy ? '#0083F0' : '#808080'} />
          <p>[필수] 서비스 이용약관 </p>
          <span>보기</span>
        </S.CheckmarkWrap>
      </S.CheckWrap>
      <DodamFilledButton
        backgroundColorType="Primary"
        text="가입하기"
        size="Large"
        width={400}
        typography={['Body1', 'Bold']}
        onClick={submitSignup}
      />
    </S.SignupWrap>
  );
};

export default Id;
