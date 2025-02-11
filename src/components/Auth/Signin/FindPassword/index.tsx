import React, { Dispatch, SetStateAction } from 'react';
import * as S from './style';
import { DodamFilledButton, DodamTextField } from '@b1nd/dds-web';
import { FindPasswordParam } from 'repositories/Auth/AuthRepository';
interface FindPasswordProps {
  setSection: Dispatch<SetStateAction<string>>;
  findPasswordData: FindPasswordParam;
  handleFindPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FindPassword = ({ findPasswordData, handleFindPasswordChange }: FindPasswordProps) => {
  return (
    <S.SignupWrap>
      <S.SignUpTitle>비밀번호 재설정</S.SignUpTitle>
      <S.InputWrap>
        <DodamTextField
          onChange={handleFindPasswordChange}
          id="id"
          name="id"
          type="text"
          value={findPasswordData.id}
          label="아이디"
          width={360}
        />
        <DodamTextField
          onChange={handleFindPasswordChange}
          id="pw"
          name="pw"
          type="password"
          value={findPasswordData.pw}
          label="비밀번호"
          width={360}
        />
        <DodamTextField
          onChange={handleFindPasswordChange}
          id="pw"
          name="pw"
          type="password"
          value={findPasswordData.pw}
          label="비밀번호 확인"
          width={360}
        />
      </S.InputWrap>
      <DodamFilledButton
        text="비밀번호 재설정"
        backgroundColorType="Primary"
        size="Large"
        width={360}
        textTheme={'staticWhite'}
        typography={['Body1', 'Bold']}
      />
    </S.SignupWrap>
  );
};

export default FindPassword;
