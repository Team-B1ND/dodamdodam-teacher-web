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

  gap: 20px;

  position: relative;
`;

export const AccountContainer = styled.div`
  width: 68%;
  height: 5%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: -10px;

  color: ${DodamLightTheme.labelAlternative};

  p {
    color: ${DodamLightTheme.labelNormal};
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const NoneAccount = styled.div`
  color: ${({ theme }) => theme.labelAssisitive};

  p {
    color: ${({ theme }) => theme.labelNormal};
    text-decoration: underline;
  }
`;
