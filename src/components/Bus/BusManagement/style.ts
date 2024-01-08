import styled, { CSSObject } from "styled-components";

export const SearchAndAddBus = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const AddBusButton = styled.button`
  width: 80px;
  height: 32px;

  cursor: pointer;
  outline: none;
  border: none;
`;

export const AddButtonStyle: CSSObject = {
  height: "34px",
  transition: "all 0.2s ease-in-out",
  borderRadius: "5px",
  "&:hover": {
    boxShadow: "0 0 0 1px #fff, 0 0 0 3px rgba(50, 100, 150, 0.4)",
  },
};
