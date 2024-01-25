import styled, { CSSObject } from "styled-components";

export const NoneDataText = styled.div`
  width: 100%;
  height: 100%;

  font-size: 17px;
  font-weight: 400;
  padding-top: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CommonBusTBody: CSSObject = {
  width: "100%",
  height: "100%",
  fontSize: "14px",
  fontWeight: "600",
  display: "flex",
  flexDirection: "column",
  whiteSpace: "normal",
  tr: {
    "&:hover": {
      filter: "unset",
    },
  },
};

export const CommonBusTR: CSSObject = {
  width: "100%",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  columnGap: "10px",
  borderTop: "none",
  borderBottom: "1px solid #d9d9d9",
};

export const CommonBusPassengerStyle: CSSObject = {
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
