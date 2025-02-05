import styled from 'styled-components';
import { DodamColor } from '@b1nd/dds-web';
import { DodamLightTheme } from '@b1nd/dds-web';

export const SignWrap = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${DodamLightTheme.backgroundNetural};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
