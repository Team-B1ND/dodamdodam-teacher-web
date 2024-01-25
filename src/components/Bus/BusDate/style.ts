import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const SelectBusDateToView = styled.div<{ isFocus: boolean }>`
  width: 100%;
  height: auto;
  padding-top: 2px;

  display: flex;
  flex-direction: column;
  row-gap: 6px;

  p {
    font-size: 12px;
    transition: all ease-in-out ${({ isFocus }) => (isFocus ? "0.13s" : "0.3s")};
    color: ${({ isFocus }) =>
      isFocus ? `${palette.main}` : "rgba(0, 0, 0, 0.54)"};
  }

  input {
    width: 180px;
    font-size: 17px;

    border: none;
    outline: none;
    padding-bottom: 5px;

    transition: all ease-in-out ${({ isFocus }) => (isFocus ? "0.13s" : "0.3s")};
    border-bottom: 1.5px solid
      ${({ isFocus }) => (isFocus ? `${palette.main}` : "#ddd")};
  }
`;
