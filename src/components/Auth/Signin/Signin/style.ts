import { DodamLightTheme } from '@b1nd/dds-web';
import styled from 'styled-components';

export const SigninWrap = styled.div`
  width: 50%;
  height: 55%;

  background-color: ${DodamLightTheme.backgroundNormal};

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 12px;

  @media (max-width: 1308px) {
    width: 40%;
    height: 50%;
  }

  @media (max-width: 568px) {
    width: 80%;
    height: 50%;
  }
`;

export const SigninImage = styled.img`
  height: 95%;
  padding-left: 10px;
  width: 50%;

  @media (max-width: 1308px) {
    display: none;
  }
`;

export const InputWrap = styled.div`
  min-width: 55%;
  /* width: 55%; */
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;

  position: relative;

  @media (max-width: 1308px) {
    width: 100%;
    height: 100%;
  }
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
