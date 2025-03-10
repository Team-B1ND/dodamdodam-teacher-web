import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import { useSignup } from 'hooks/auth/useSignup'
import { SIGNUP_SECTION_NAME } from 'constants/Auth/Signup/signup.constant'
import { useSignin } from 'hooks/auth/useSignin'
import * as S from './style'
import SignupSecond from './SignupSecond'
import SignupFirst from './SignupFirst'

interface SignupProps {
  setIsSignin: Dispatch<SetStateAction<boolean>>
}

const Signup = ({ setIsSignin }: SignupProps) => {
  const {
    section,
    setSection,
    handleSignupChange,
    submitSignup,
    signupTypeCheck,
    signupData,
    personalInfo,
    policy,
    setPersonalInfo,
    setPolicy,
    error,
    checkAllRequired,
    pwCheck,
    setPwCheck,
    isModal,
    emailVerification,
    phoneVerification,
    isAuthCode,
    setAuthCode,
    setModal,
    isEmailVerified,
    isPhoneVerified,
    clearSignupField,
  } = useSignup()
  const { handlePasswordView, passwordType } = useSignin()
  const [, setPrevSection] = useState(section)

  const AuthComponents: ReactNode[] = [
    <SignupFirst
      error={error}
      signupData={signupData}
      signupTypeCheck={signupTypeCheck}
      handleSignupChange={handleSignupChange}
      isModal={isModal}
      setModal={setModal}
      verifyCode={isAuthCode}
      setVerifyCode={setAuthCode}
      emailVerification={emailVerification}
      phoneVerification={phoneVerification}
      isAuthCode={isAuthCode}
      setAuthCode={setAuthCode}
      isEmailVerified={isEmailVerified}
      isPhoneVerified={isPhoneVerified}
      clearSignupField={clearSignupField}
    />,
    <SignupSecond
      error={error}
      signupData={signupData}
      setIsSignin={setIsSignin}
      setSection={setSection}
      handleSignupChange={handleSignupChange}
      policy={policy}
      personalInfo={personalInfo}
      setPolicy={setPolicy}
      setPersonalInfo={setPersonalInfo}
      checkAllRequired={checkAllRequired}
      submitSignup={submitSignup}
      clearSignupField={clearSignupField}
    />,
  ]

  useEffect(() => {
    setPrevSection(section)
  }, [section])
  return (
    <>
      <S.SignupWrap>
        {AuthComponents.map((component, idx) => {
          return section === SIGNUP_SECTION_NAME[idx].title && component
        })}
      </S.SignupWrap>
    </>
  )
}

export default Signup
