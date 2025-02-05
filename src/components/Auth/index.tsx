import * as S from './style';
import AuthPanelImg from 'assets/Auth/panel.svg';
import { useState } from 'react';
import Signin from './Signin';
import Signup from './Signup';

const Auth = () => {
  const [isSignin, setIsSignin] = useState(true);
  return (
    <S.SignWrap>{isSignin ? <Signin setIsSignin={setIsSignin} /> : <Signup setIsSignin={setIsSignin} />}</S.SignWrap>
  );
};

export default Auth;
