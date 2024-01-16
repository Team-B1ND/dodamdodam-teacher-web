import styled, { FlattenSimpleInterpolation, css } from "styled-components";
import { AuthButtonType } from "../Button/types";

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
  ${({ AuthButtonType }) => getColor[AuthButtonType]}
`;

const getColor: Record<AuthButtonType, FlattenSimpleInterpolation> = {
  agree: css`
    color: #fff;
    background-color: rgba(0, 103, 188, 0.85);
    border: 0;
  `,
  cancel: css`
    color: rgba(0, 103, 188, 0.85);
    background-color: #fff;
    border: 1px solid rgba(0, 103, 188, 0.85);
  `,
};
