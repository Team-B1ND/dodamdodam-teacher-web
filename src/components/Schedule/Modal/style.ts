import styled, { CSSObject, css } from "styled-components";
import { CgClose } from "react-icons/cg";
import { palette } from "styles/palette";

export const Container = styled.div`
  height: 70%;
  overflow: auto;

  background-color: #fff;
  position: fixed;
  padding: 1.5rem;
`;

export const CloseIcon = styled(CgClose)`
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;

  transform: scale(1);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ddd;
    transform: scale(0.96);
  }
  &:active {
    background-color: #eee;
  }
`;

export const TableStyle: CSSObject = {
  width: "100%",

  display: "flex",

  fontSize: "17px",

  border: "1px solid #ddd",
  borderRadius: "5px",
  marginTop: "20px",
};

export const ScheduleNameInput = styled.input`
  border: none;
  outline: none;

  &:focus {
    border-bottom: 1px solid blue;
  }

  padding: 8px;
  width: 85%;
  font-size: 17px;
  border: none;
  color: #333;
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

export const GradeBox = styled.div<{ isSelect: boolean }>`
  width: 68px;
  height: 28px;

  border: 1px solid #0067bc;
  outline: none;
  border-radius: 5px;
  padding: 5px;

  cursor: pointer;
  background-color: #fff;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 14px;

  ${({ isSelect }) =>
    isSelect &&
    css`
      background-color: #0067bc;
      color: #fff;
    `}
`;

export const GradeColorBox = styled.div`
  width: 12px;
  height: 12px;

  border-radius: 100%;
`;

export const TRStyle: CSSObject = {
  width: "90px",

  display: "flex",
  flexDirection: "column",

  borderTop: "none",
  borderBottom: "none",
  borderRight: "1px solid #ddd",

  fontWeight: "550",
  backgroundColor: "#eee",
};

export const TDStyle: CSSObject = {
  width: "100%",
  height: "63px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const FormTrStyle: CSSObject = {
  width: "calc(100% - 100px)",

  display: "flex",
  flexDirection: "column",
  borderTop: "none",
  borderBottom: "none",
};

export const FormTDStyle: CSSObject = {
  width: "100%",
  height: "63px",

  display: "flex",
  alignItems: "center",
  columnGap: "10px",
  position: "relative",
};

export const FormInputTDStyle: CSSObject = {
  ...FormTDStyle,
  borderBottom: "1px solid #ddd",
};
