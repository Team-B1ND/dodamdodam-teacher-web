import styled, { css } from "styled-components";
import { palette } from "../../../styles/palette";

export const MenuItemContainer = styled.div<{ isArrival: boolean }>`
  width: 100%;
  height: 40px;
  padding: 0px 11px;
  background: none;
  transition: 0.5s all ease-in-out;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: black;
  cursor: pointer;
  font-weight: bold;

  ${({ isArrival }) =>
    isArrival &&
    css`
      color: ${palette.main};
      background-color: white;
    `}

  &:hover {
    color: ${palette.main};
    background-color: white;
  }
`;
