import * as S from './style';
import TextField from 'components/common/TextField';
import React, { Dispatch, SetStateAction } from 'react';
import { useSignin } from 'hooks/auth/useSignin';
import { IoEyeSharp } from 'react-icons/io5';
import Pannel from 'assets/Auth/panel.svg';
import { DodamFilledButton, DodamLightTheme } from '@b1nd/dds-web';

interface SigninProps {
  setIsSignin: Dispatch<SetStateAction<boolean>>;
}

const Signin = ({ setIsSignin }: SigninProps) => {
  const { handleSigninChange, submitSignin, handlePasswordView, passwordType } = useSignin();
  return (
    <S.SigninWrap>
      <S.SigninImage src={Pannel} alt="AuthPannel" />
      <S.InputWrap>
        <TextField onChange={handleSigninChange} id="id" name="id" functions="pw">
          아이디
        </TextField>
        <S.PasswordBox>
          <TextField onChange={handleSigninChange} functions={submitSignin} id="pw" name="pw" type={passwordType.type}>
            비밀번호
          </TextField>
          <S.PasswordViewBox onClick={() => handlePasswordView()}>
            <IoEyeSharp />
          </S.PasswordViewBox>
        </S.PasswordBox>
        <S.AccountContainer>
          비밀번호를 잊으셨나요?&nbsp;<p onClick={() => setIsSignin(false)}>비밀번호 재설정</p>
        </S.AccountContainer>
        <DodamFilledButton
          customStyle={{ backgroundColor: DodamLightTheme.primaryNormal }}
          text="로그인"
          size="Large"
          width={330}
          typography={['Body1', 'Bold']}
          enabled={true}
        />
      </S.InputWrap>
    </S.SigninWrap>
  );
};

export default Signin;
