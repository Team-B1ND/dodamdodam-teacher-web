import { DodamLightTheme, DodamTypography } from '@b1nd/dds-web';
import styled, { css } from 'styled-components';

export const SignupWrap = styled.div`
  width: 28%;
  height: 63%;

  background-color: ${DodamLightTheme.backgroundNormal};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  border-radius: 18px;

  padding: 40px;
`;

export const SignUpTitle = styled.h1`
  ${DodamTypography.Title2.Bold};
  color: ${({ theme }) => theme.labelNormal};
`;

export const InputWrap = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
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
