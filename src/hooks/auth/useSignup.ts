import { useCallback, useState } from "react";
import { SignupParam } from "../../repositories/Auth/Signup/signup.repository";
import { sha512 } from "js-sha512";
import signupRepositoryImpl from "../../repositories/Auth/Signup/signup.repositoryImpl";

export const useSignup = () => {
  const [section, setSection] = useState("id");

  const [signupData, setSignupData] = useState<SignupParam>({
    id: "",
    email: "",
    name: "",
    phone: "",
    position: "",
    pw: "",
    tel: "",
  });

  const handleSignupChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setSignupData((prev) => ({ ...prev, [name]: value }));
    },
    [setSignupData]
  );

  const onSignup = useCallback(async () => {
    const { id, pw, email, phone, position, name, tel } = signupData;

    const validSignupData: SignupParam = {
      id,
      pw: sha512(pw),
      email,
      phone,
      position,
      name,
      tel,
    };

    console.log(validSignupData);
    try {
      await signupRepositoryImpl.postSignup(validSignupData);
      console.log("회원가입성공");
    } catch (e) {
      console.log("회원가입실패");
    }
  }, [signupData]);
  return { section, setSection, handleSignupChange, onSignup };
};
