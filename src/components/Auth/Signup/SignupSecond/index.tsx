import { Dispatch, SetStateAction } from 'react'
import { MemberSignUpParam } from 'repositories/Member/MemberRepository'
import { PasswordParm } from 'repositories/Auth/AuthRepository'
import * as S from './style'
import {
  Checkmark,
  ChevronLeft,
  ChevronRight,
  DodamFilledButton,
  DodamTextField,
} from '@b1nd/dds-web'

interface SignupSecondProps {
  error: MemberSignUpParam
  policy: boolean
  personalInfo: boolean
  signupData: MemberSignUpParam
  setPolicy: Dispatch<SetStateAction<boolean>>
  setPersonalInfo: Dispatch<SetStateAction<boolean>>
  setSection: Dispatch<SetStateAction<string>>
  setIsSignin: Dispatch<SetStateAction<boolean>>
  handleSignupChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  checkAllRequired: () => void
  submitSignup: () => void
  clearSignupField: (field: keyof MemberSignUpParam) => void
}

const SignupSecond = ({
  handleSignupChange,
  signupData,
  error,
  policy,
  personalInfo,
  checkAllRequired,
  setPolicy,
  setPersonalInfo,
  submitSignup,
  setSection,
  clearSignupField
}: SignupSecondProps) => {
  return (
    <S.SignupWrap>
      <S.SignUpTitle>회원가입</S.SignUpTitle>

      <S.InputWrap>
        <DodamTextField
          onChange={handleSignupChange}
          id='id'
          name='id'
          type='text'
          value={signupData.id}
          label='아이디'
          supportingText='아이디는 영문과 숫자로 5 ~ 20글자 이내여야 해요.'
          isError={error.id !== ''}
          onRemoveClick={() => clearSignupField('id')}
        />
        <DodamTextField
          onChange={handleSignupChange}
          id='pw'
          name='pw'
          type='password'
          value={signupData.pw}
          label='비밀번호'
          isError={error.pw !== ''}
          onRemoveClick={() => clearSignupField('pw')}
        />
        <DodamTextField
          onChange={handleSignupChange}
          id='checkPw'
          name='checkPw'
          type='password'
          value={signupData.checkPw}
          label='비밀번호 확인'
          isError={error.checkPw !== ''}
          onRemoveClick={() => clearSignupField('checkPw')}
        />
        <DodamFilledButton
          icon={
            <Checkmark
              size={20}
              color={personalInfo && policy ? '#0083F0' : '#808080'}
            />
          }
          attendants='left'
          backgroundColorType='Assisitive'
          width={400}
          onClick={checkAllRequired}
          size='Large'
          textTheme='labelNetural'
          typography={['Body1', 'Bold']}
          text='필수 항목 모두 체크하기'
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
      <S.SignupButtonWrap>
        <DodamFilledButton
          backgroundColorType='Assisitive'
          text='이전'
          size='Large'
          width={150}
          typography={['Body1', 'Bold']}
          onClick={() => setSection('SignupFirst')}
          icon={<ChevronLeft size={20} color='labelNetural' />}
          attendants='left'
          textTheme='labelNetural'
        />
        <DodamFilledButton
          backgroundColorType='Primary'
          text='회원가입'
          size='Large'
          width={150}
          typography={['Body1', 'Bold']}
          onClick={submitSignup}
          icon={<ChevronRight size={20} color='staticWhite' />}
          attendants='right'
          textTheme='staticWhite'
        />
      </S.SignupButtonWrap>
    </S.SignupWrap>
  )
}

export default SignupSecond
