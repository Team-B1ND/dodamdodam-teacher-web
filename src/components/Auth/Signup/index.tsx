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

interface SignupProps {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const Signup = ({ setIsLogin }: SignupProps) => {
  const { section, setSection, handleSignupChange, onSignup } = useSignup();
  const { handlePasswordView, passwordType } = useLogin();
  const [prevSection, setPrevSection] = useState(section);
  const AuthComponents: ReactNode[] = [
    <Id
      passwordType={passwordType}
      handlePasswordView={handlePasswordView}
      setIsLogin={setIsLogin}
      setSection={setSection}
      handleSignupChange={handleSignupChange}
    />,
    <Email
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
      {AuthComponents.map((component, idx) => {
        return section === SIGNUP_SECTION_NAME[idx].title && component;
      })}
    </>
  );
};

export default Signup;
