import { CSSObject } from "styled-components";

export const BusTD: CSSObject = {
  width: "13%",
  fontSize: "16px",
  lineHeight: "20px",
};

export const BusLeaveTime: CSSObject = {
  width: "13%",
  fontSize: "16px",
  lineHeight: "20px",
  whiteSpace: "nowrap",
};

export const ButtonContainerStyle: CSSObject = {
  width: "14%",
  display: "flex",
  alignItems: "center",
  columnGap: "5px",
};

export const EditStyle: CSSObject = {
  width: "60px",
  height: "33px",
  borderRadius: "7px",
  transition: "all 0.2s ease-in-out",
  transform: "scale(1)",
  "&:hover": {
    boxShadow: "0 0 0 1px #fff, 0 0 0 3px rgba(50, 100, 150, 0.4)",
  },
  "&:active": {
    transform: "scale(0.97)",
  },
};

export const DelStyle: CSSObject = {
  width: "60px",
  height: "33px",
  borderRadius: "7px",
  transition: "all 0.2s ease-in-out",
  transform: "scale(1)",
  "&:hover": {
    boxShadow: "0 0 0 1px #fff, 0 0 0 3px #ddd",
  },
  "&:active": {
    transform: "scale(0.97)",
  },
};
