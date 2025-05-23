import * as S from './style'
import React, { Dispatch, SetStateAction } from 'react'
import { DodamFilledButton, DodamTextField } from '@b1nd/dds-web'
import { SignInParam } from 'repositories/Auth/AuthRepository'
import Pannel from 'assets/Auth/panel.png'
interface LoginProps {
  setSection: Dispatch<SetStateAction<string>>
  submitSignin: () => void
  signinData: SignInParam
  handleSigninChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  clearSigninField: (field: keyof SignInParam) => void
}

const Login = ({
  setSection,
  submitSignin,
  signinData,
  handleSigninChange,
  clearSigninField,
}: LoginProps) => {
  return (
    <S.SigninWrap>
      <S.SigninImage src={Pannel} alt='AuthPannel' />
      <S.SignBox>
        <S.InputBox>
          <DodamTextField
            onChange={handleSigninChange}
            id='id'
            name='id'
            type='text'
            value={signinData.id}
            label='아이디'
            onKeyDown={submitSignin}
            onRemoveClick={() => clearSigninField('id')}
          />
          <DodamTextField
            onChange={handleSigninChange}
            id='pw'
            name='pw'
            type='password'
            value={signinData.pw}
            label='비밀번호'
            onKeyDown={submitSignin}
          />

          <S.AccountContainer>
            비밀번호를 잊으셨나요?&nbsp;
            <p onClick={() => setSection('FindPassword')}>비밀번호 재설정</p>
          </S.AccountContainer>
        </S.InputBox>
        <DodamFilledButton
          backgroundColorType='Primary'
          text='로그인'
          size='Large'
          typography={['Body1', 'Bold']}
          enabled={true}
          textTheme='staticWhite'
          onClick={submitSignin}
        />
      </S.SignBox>
    </S.SigninWrap>
  )
}

export default Login
