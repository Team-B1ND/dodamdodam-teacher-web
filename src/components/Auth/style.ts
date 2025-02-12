import styled from 'styled-components';
import { DodamTypography } from '@b1nd/dds-web';

export const SignWrap = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.backgroundNetural};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const ChangeAuthButton = styled.div`
  position: absolute;
  bottom: 60px;

  p {
    color: ${({ theme }) => theme.labelAssisitive};
    ${DodamTypography.Label.Medium};
  }

  span {
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Label.Medium};
    cursor: pointer;
    text-decoration: underline;
  }
`;
