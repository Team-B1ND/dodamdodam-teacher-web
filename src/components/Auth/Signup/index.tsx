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
import { useSignin } from "../../../hooks/auth/useSignin";
import * as S from "./style";

interface SignupProps {
  setIsSignin: Dispatch<SetStateAction<boolean>>;
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
  } = useSignup();
  const { handlePasswordView, passwordType } = useSignin();
  const [prevSection, setPrevSection] = useState(section);
  const AuthComponents: ReactNode[] = [
    <Id
      signupData={signupData}
      passwordType={passwordType}
      handlePasswordView={handlePasswordView}
      setIsSignin={setIsSignin}
      setSection={setSection}
      handleSignupChange={handleSignupChange}
      signupTypeCheck={signupTypeCheck}
    />,
    <Email
      personalInfo={personalInfo}
      policy={policy}
      setPersonalInfo={setPersonalInfo}
      setPolicy={setPolicy}
      onSignup={submitSignup}
      setIsSignin={setIsSignin}
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
