import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useSignup } from "../../../hooks/auth/useSignup";
import { SIGNUP_SECTION_NAME } from "../../../constants/Signup/signup.constant";
import Id from "./Id";
import Email from "./Email";
import { useLogin } from "../../../hooks/auth/useLogin";
import * as S from "./style";

interface SignupProps {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const Signup = ({ setIsLogin }: SignupProps) => {
  const {
    section,
    setSection,
    handleSignupChange,
    onSignup,
    signupTypeCheck,
    signupData,
    personalInfo,
    policy,
    setPersonalInfo,
    setPolicy,
  } = useSignup();
  const { handlePasswordView, passwordType } = useLogin();
  const [prevSection, setPrevSection] = useState(section);
  const AuthComponents: ReactNode[] = [
    <Id
      signupData={signupData}
      passwordType={passwordType}
      handlePasswordView={handlePasswordView}
      setIsLogin={setIsLogin}
      setSection={setSection}
      handleSignupChange={handleSignupChange}
      signupTypeCheck={signupTypeCheck}
    />,
    <Email
      personalInfo={personalInfo}
      policy={policy}
      setPersonalInfo={setPersonalInfo}
      setPolicy={setPolicy}
      onSignup={onSignup}
      setIsLogin={setIsLogin}
      setSection={setSection}
      handleSignupChange={handleSignupChange}
    />,
  ];

  useEffect(() => {
    setPrevSection(section);
  }, [section]);
  return (
    <>
      <S.SignupWrap>
        {AuthComponents.map((component, idx) => {
          return section === SIGNUP_SECTION_NAME[idx].title && component;
        })}
      </S.SignupWrap>
    </>
  );
};

export default Signup;
