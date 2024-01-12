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
