import styled, { css } from "styled-components";
import { palette } from "../../../styles/palette";

export const PrevNextButtonWrap = styled.div`
  width: 100%;
  padding-top: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;

  button {
    width: 80px;
    height: 40px;

    border-radius: 7px;
    outline: none;
    border: 1px solid #ddd;

    font-size: 16px;
    cursor: pointer;
  }
`;

const ButtonHover = css`
  transition: all 0.15s ease-in;
  &:hover {
    background-color: ${palette.main};
    color: #fff;
  }
`;

export const PrevButton = styled.button<{ page: number }>`
  ${({ page }) =>
    page === 1
      ? css`
          opacity: 0.6;
        `
      : ButtonHover}
`;

export const NextButton = styled.button`
  ${ButtonHover}
`;
