import { CSSObject } from "styled-components";

export const BusTBody: CSSObject = {
  width: "100%",
  fontSize: "14px",
  fontWeight: "600",
  marginTop: "5px",
  display: "flex",
  flexDirection: "column",
  whiteSpace: "normal",
  tr: {
    "&:hover": {
      filter: "unset",
    },
  },
};

export const BusTR: CSSObject = {
  width: "100%",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  columnGap: "10px",
  borderTop: "none",
  borderBottom: "1px solid #d9d9d9",
};

export const BusTD: CSSObject = {
  width: "14%",
  fontSize: "16px",
  lineHeight: "20px",
};

export const BusLeaveTime: CSSObject = {
  width: "14%",
  fontSize: "16px",
  lineHeight: "20px",
  whiteSpace: "nowrap",
};

export const PassengerStyle: CSSObject = {
  width: "65px",
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
