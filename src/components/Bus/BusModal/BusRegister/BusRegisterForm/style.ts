import styled, { CSSObject } from "styled-components";
import { palette } from "../../../../../styles/palette";

export const BusForm = styled.form`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;

export const TableStyle: CSSObject = {
  width: "100%",
  height: "100%",

  display: "flex",
  fontSize: "17px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  overflow: "hidden",
};

export const TitleTRStyle: CSSObject = {
  width: "100px",
  heihgt: "auto",

  display: "flex",
  flexDirection: "column",

  borderTop: "none",
  borderBottom: "none",
  borderRight: "1px solid #ddd",

  fontWeight: "550",
  backgroundColor: "#eee",
};

export const LastTitleTDStyle: CSSObject = {
  width: "100%",
  height: "63px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const TitleTDStyle: CSSObject = {
  borderBottom: "1px solid #ddd",
  ...LastTitleTDStyle,
};

export const InputTRStyle: CSSObject = {
  width: "calc(100% - 100px)",
  heihgt: "auto",

  display: "flex",
  flexDirection: "column",
  borderTop: "none",
  borderBottom: "none",
};

export const LastInputTDStyle: CSSObject = {
  width: "100%",
  height: "63px",

  display: "flex",
  alignItems: "center",
  columnGap: "10px",
};

export const InputTDStyle: CSSObject = {
  ...LastInputTDStyle,
  borderBottom: "1px solid #ddd",
};

export const ButtonContainer = styled.div`
  width: 100%;
  height: 55px;

  display: flex;
  justify-content: flex-end;
  column-gap: 7px;
`;

export const RegistButton: CSSObject = {
  height: "37px",
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

export const BusInput = styled.input`
  width: 100%;
  height: 33px;

  font-size: 18px;

  padding: 5px 5px 5px 2px;
  border: none;
  outline: none;
  border-bottom: 1.5px solid #ddd;

  transition: all 0.1s ease-in-out;
  &:focus {
    border-bottom: 2px solid ${palette.main};
  }
`;

export const DateTimePicker = styled.input`
  width: 100%;
  font-size: 17px;

  outline: none;
  border: none;
  border-bottom: 1.5px solid #ddd;
  padding-bottom: 5px;

  transition: all 0.2s ease-in-out;
  &:focus {
    border-bottom: 2px solid ${palette.main};
  }
`;

export const TimeRequiredInput = styled.input`
  width: 50px;
  height: 30px;

  outline: none;
  border: none;

  font-size: 18px;
  border-bottom: 1.5px solid #ddd;
  text-align: center;

  transition: all 0.1s ease-in-out;
  margin-right: 3px;
  &:focus {
    border-bottom: 2px solid ${palette.main};
  }
`;
