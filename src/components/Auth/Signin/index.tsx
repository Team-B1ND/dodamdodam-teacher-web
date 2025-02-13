import { ReactNode, useEffect, useState } from 'react';
import Login from './Signin';
import FindPassword from './FindPassword';
import { useSignin } from 'hooks/auth/useSignin';
import { SIGNIN_SECTION_NAME } from 'constants/Auth/SIgnin/signin.constants';

const Signin = () => {
  const {
    section,
    setSection,
    findPasswordData,
    handleFindPasswordChange,
    submitSignin,
    signinData,
    handleSigninChange,
    handleFindPassword,
  } = useSignin();
  const [, setPrevSection] = useState(section);
  const SigninComponents: ReactNode[] = [
    <Login
      setSection={setSection}
      submitSignin={submitSignin}
      signinData={signinData}
      handleSigninChange={handleSigninChange}
    />,
    <FindPassword
      setSection={setSection}
      findPasswordData={findPasswordData}
      handleFindPasswordChange={handleFindPasswordChange}
      handleFindPassword={handleFindPassword}
    />,
  ];

  useEffect(() => {
    setPrevSection(section);
  }, [section]);

  return (
    <>
      {SigninComponents.map((component, idx) => {
        return section === SIGNIN_SECTION_NAME[idx].title && component;
      })}
    </>
  );
};

export default Signin;
