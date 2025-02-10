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

  @media (max-width: 1068px) {
    width: 45%;
    height: 63%;
  }

  @media (max-width: 568px) {
    width: 85%;
    height: 63%;
  }
`;

export const SignupButtonWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SignUpTitle = styled.h1`
  ${DodamTypography.Title2.Bold};
  color: ${({ theme }) => theme.labelNormal};
  height: fit-content;
`;

export const InputWrap = styled.div`
  width: 100%;
  height: 83%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const CheckWrap = styled.div`
  width: 100%;
  height: 18%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CheckmarkWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;

  p {
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Label.Regular};
    width: 83%;
  }
  span {
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Label.Medium};

    text-decoration: underline;
  }
`;
