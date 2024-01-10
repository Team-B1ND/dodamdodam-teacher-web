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

interface SignupProps {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const Signup = ({ setIsLogin }: SignupProps) => {
  const { section, setSection } = useSignup();
  const [prevSection, setPrevSection] = useState(section);
  const AuthComponents: ReactNode[] = [
    <Id setIsLogin={setIsLogin} setSection={setSection} />,
    <Email setIsLogin={setIsLogin} setSection={setSection} />,
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
