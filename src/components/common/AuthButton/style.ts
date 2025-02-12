import styled, { css } from 'styled-components';
import { AuthButtonType } from '../Button/types';

export const AuthButtonContainer = styled.button<{
  width: number;
  top?: number;
  AuthButtonType: AuthButtonType;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;

  width: ${(props) => props.width}px;
  height: 45px;

  font-size: 18px;

  margin-top: ${(props) => props.top}px;
`;
