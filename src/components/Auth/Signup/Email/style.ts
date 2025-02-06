import { DodamLightTheme } from '@b1nd/dds-web';
import styled, { css } from 'styled-components';

export const SigninWrap = styled.div`
  width: 50%;
  height: 55%;

  background-color: ${DodamLightTheme.backgroundNormal};

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 12px;
`;

export const SigninImage = styled.img`
  height: 95%;
  padding-left: 10px;
`;

export const InputWrap = styled.div`
  width: 55%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AccountContainer = styled.div`
  width: 75%;
  height: 5%;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  color: ${DodamLightTheme.labelAlternative};

  p {
    color: ${DodamLightTheme.labelNormal};
    text-decoration: underline;
  }
`;

export const PasswordBox = styled.div`
  display: flex;
  align-items: center;
`;
export const PasswordViewBox = styled.div`
  z-index: 10;

  font-size: 20px;

  margin-left: -16px;
  margin-top: 45px;

  color: gray;

  user-select: none;
`;

export const ButtonStyle = css`
  width: 350px;
  margin-top: 10px;
  background-color: ${DodamLightTheme.primaryNormal};
  color: ${DodamLightTheme.staticWhite};
`;

export const NoneAccount = styled.div`
  color: ${({ theme }) => theme.labelAssisitive};

  p {
    color: ${({ theme }) => theme.labelNormal};
    text-decoration: underline;
  }
`;
