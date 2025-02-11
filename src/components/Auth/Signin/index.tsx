import * as S from './style';
import React from 'react';
import { useSignin } from 'hooks/auth/useSignin';
import Pannel from 'assets/Auth/panel.svg';
import { DodamFilledButton, DodamTextField } from '@b1nd/dds-web';

const Signin = () => {
  const { handleSigninChange, submitSignin, signinData } = useSignin();
  return (
    <S.SigninWrap>
      <S.SigninImage src={Pannel} alt="AuthPannel" />
      <S.InputWrap>
        <DodamTextField
          onChange={handleSigninChange}
          id="id"
          name="id"
          type="text"
          value={signinData.id}
          label="아이디"
          width={330}
        />
        <DodamTextField
          onChange={handleSigninChange}
          id="pw"
          name="pw"
          type="password"
          value={signinData.pw}
          label="비밀번호"
          width={330}
        />
        <S.AccountContainer>
          비밀번호를 잊으셨나요?&nbsp;<p>비밀번호 재설정</p>
        </S.AccountContainer>
        <DodamFilledButton
          backgroundColorType="Primary"
          text="로그인"
          size="Large"
          width={330}
          typography={['Body1', 'Bold']}
          enabled={true}
          textTheme="staticWhite"
          onClick={submitSignin}
        />
      </S.InputWrap>
    </S.SigninWrap>
  );
};

export default Signin;
