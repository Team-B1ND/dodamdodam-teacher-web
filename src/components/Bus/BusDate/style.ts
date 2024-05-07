import styled, { CSSObject } from "styled-components";
import { palette } from "styles/palette";

export const SearchAndSelectDateBus = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  column-gap: 15px;
`;

export const SelectBusDateToView = styled.div<{ isFocus: boolean }>`
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

export const AddButtonStyle: CSSObject = {
  width: "105px",
  height: "34px",
  padding: "3px 5px",
  fontSize: "15px",
  transition: "all 0.2s ease-in-out",
  borderRadius: "5px",
  transform: "scale(1)",
  "&:hover": {
    boxShadow: "0 0 0 1px #fff, 0 0 0 3px rgba(50, 100, 150, 0.4)",
  },
  "&:active": {
    transform: "scale(0.97)",
  },
};
