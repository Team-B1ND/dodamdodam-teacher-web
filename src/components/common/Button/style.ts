import styled, {
  css,
  CSSObject,
  // FlattenSimpleInterpolation,
} from 'styled-components';
import { ButtonType } from './types';

export const ButtonContainer = styled.button<{
  customStyle?: CSSObject;
  ButtonType: ButtonType;
}>`
  width: 85px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  user-select: none;
  cursor: pointer;
  border-radius: 10px;
  font-size: 18px;
  border: none;
  outline: none;
  ${({ ButtonType }) => getColor[ButtonType]}
  ${({ customStyle }) => customStyle}
`;

const getColor = {
  agree: css`
    color: #fff;
    background-color: rgba(0, 103, 188, 0.85);
  `,
  agreed: css`
    color: rgba(0, 103, 188, 0.85);
    background-color: #fff;
    border: 1px solid rgba(0, 103, 188, 0.85);
  `,
  disagree: css`
    color: #212529;
    background-color: #efefef;
    border: 1px solid black;
  `,

  disagreed: css`
    color: rgba(0, 0, 0, 0.85);
    background-color: #fff;
    border: 1px solid black;
  `,
  cancel: css`
    height: 30px;
    border-radius: 10px;
    color: #fff;
    background-color: #ff6b6b;
  `,
};

export const ButtonWrapperBox = styled.div<{ customStyle?: CSSObject }>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: end;
  column-gap: 10px;
`;
