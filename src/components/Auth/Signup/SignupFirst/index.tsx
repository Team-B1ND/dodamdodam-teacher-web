import React, { Dispatch, SetStateAction, useState } from 'react'
import * as S from './style'
import { DodamFilledButton, DodamTextField } from '@b1nd/dds-web'
import { MemberSignUpParam } from 'repositories/Member/MemberRepository'
import VerifieModal from '../VerifyModal'
import { SignUpModal } from 'types/Member/member.type'

interface SignupFirstProps {
  error: MemberSignUpParam
  signupData: MemberSignUpParam
  handleSignupChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  signupTypeCheck: () => void
  verifyCode: string
  setVerifyCode: Dispatch<SetStateAction<string>>
  isModal: SignUpModal
  setModal: Dispatch<SetStateAction<SignUpModal>>
  isAuthCode: string
  setAuthCode: Dispatch<SetStateAction<string>>
  emailVerification: () => void
  phoneVerification: () => void
  isEmailVerified: boolean
  isPhoneVerified: boolean
  clearSignupField: (field: keyof MemberSignUpParam) => void
}

const SignupFirst = ({
  handleSignupChange,
  signupData,
  signupTypeCheck,
  error,
  verifyCode,
  setVerifyCode,
  isModal,
  setModal,
  isAuthCode,
  setAuthCode,
  emailVerification,
  phoneVerification,
  isEmailVerified,
  isPhoneVerified,
  clearSignupField,
}: SignupFirstProps) => {
  const handleClose = (type: string) => {
    setModal((prev) => ({ ...prev, [type]: false }))
  }
  return (
    <S.SignupWrap>
      <S.SignUpTitle>회원가입</S.SignUpTitle>
      <S.InputWrap>
        <DodamTextField
          onChange={handleSignupChange}
          id='email'
          name='email'
          type='text'
          value={signupData.email}
          label='이메일'
          isError={error.email !== ''}
          supportingText={error.email}
          onRemoveClick={() => clearSignupField('email')}
        />
        <DodamTextField
          onChange={handleSignupChange}
          id='position'
          name='position'
          type='text'
          value={signupData.position}
          label='직책'
          isError={error.position !== ''}
          supportingText={error.position}
          onRemoveClick={() => clearSignupField('position')}
        />
        <DodamTextField
          onChange={handleSignupChange}
          id='phone'
          name='phone'
          type='text'
          value={signupData.phone}
          label='전화번호'
          isError={error.phone !== ''}
          supportingText={error.phone}
          onRemoveClick={() => clearSignupField('phone')}
        />
        <DodamTextField
          onChange={handleSignupChange}
          id='tel'
          name='tel'
          type='text'
          value={signupData.tel}
          label='내선 전화번호'
          isError={error.tel !== ''}
          supportingText={error.tel}
          onRemoveClick={() => clearSignupField('tel')}
        />
        <DodamTextField
          onChange={handleSignupChange}
          id='name'
          name='name'
          type='text'
          value={signupData.name}
          label='이름'
          isError={error.name !== ''}
          supportingText={error.name}
          onRemoveClick={() => clearSignupField('name')}
        />
      </S.InputWrap>
      <DodamFilledButton
        backgroundColorType='Primary'
        text={
          isEmailVerified && isPhoneVerified
            ? '다음'
            : isEmailVerified
            ? isPhoneVerified
              ? '다음'
              : '전화번호 인증'
            : '이메일 인증'
        }
        size='Large'
        typography={['Body1', 'Bold']}
        textTheme='staticWhite'
        onClick={() => signupTypeCheck()}
      />
      {isModal.email && (
        <VerifieModal
          isOpen={isModal.email}
          handleClose={() => handleClose('email')}
          isAuthCode={isAuthCode}
          setAuthCode={setAuthCode}
          onSubmit={emailVerification}
          sendLoading={false}
          reqLoading={false}
        />
      )}
      {isModal.phone && (
        <VerifieModal
          isOpen={isModal.phone}
          handleClose={() => handleClose('phone')}
          isAuthCode={isAuthCode}
          setAuthCode={setAuthCode}
          onSubmit={phoneVerification}
          sendLoading={false}
          reqLoading={false}
        />
      )}
    </S.SignupWrap>
  )
}

export default SignupFirst
