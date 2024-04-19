import styled from "styled-components";
import { palette } from "styles/palette";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DateInput = styled.input<{ isFocus: boolean }>`
  width: 180px;
  font-size: 17px;

  border: none;
  outline: none;
  padding-bottom: 5px;

  transition: all ease-in-out ${({ isFocus }) => (isFocus ? "0.13s" : "0.3s")};
  border-bottom: 1.5px solid
    ${({ isFocus }) => (isFocus ? `${palette.main}` : "#ddd")};
`;
