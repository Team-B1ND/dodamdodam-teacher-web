import * as S from './style';
import { useState } from 'react';
import Signin from './Signin';
import Signup from './Signup';

const Auth = () => {
  const [isSignin, setIsSignin] = useState(true);
  return (
    <S.SignWrap>
      {isSignin ? <Signin /> : <Signup setIsSignin={setIsSignin} />}
      <S.ChangeAuthButton>
        <p>
          {isSignin ? '계정이 없으시다면?' : '이미 계정이 있으시다면?'}&nbsp;
          <span onClick={() => setIsSignin(!isSignin)}>{isSignin ? '회원가입' : '로그인'}</span>
        </p>
      </S.ChangeAuthButton>
    </S.SignWrap>
  );
};

export default Auth;
