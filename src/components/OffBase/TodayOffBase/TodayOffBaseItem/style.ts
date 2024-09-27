import styled from "styled-components";
import { CSSObject } from "styled-components";

export const OffBaseTBody: CSSObject = {
  width: "100%",
  fontSize: "14px",
  fontWeight: "600",
  marginTop: "5px",
  display: "flex",
  rowGap: "5px",
  flexDirection: "column",
  whiteSpace: "normal",
  cursor: "pointer",
  tr: {
    "&:hover": {
      filter: "unset",
    },
  },
};

export const OffBaseTR: CSSObject = {
  width: "100%",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  columnGap: "10px",
  borderTop: "1px solid #d9d9d9",
  borderBottom: "1px solid #d9d9d9",
};

export const OffBaseTD: CSSObject = {
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
  height: "30px",
  borderRadius: "7px",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    boxShadow: "0 0 0 1px #fff, 0 0 0 3px rgba(50, 100, 150, 0.4)",
  },
};

export const ButtonContainerStyle: CSSObject = {
  width: "14%",
  display: "flex",
  alignItems: "center",
  columnGap: "5px",

  marginRight: "10px",
};

export const EditStyle: CSSObject = {
  width: "5rem",
  height: "2rem",
  borderRadius: "5px",
  fontSize: "18px",
  transition: "all 0.2s ease-in-out",

  "&:hover": {
    boxShadow: "0 0 0 1px #fff, 0 0 0 3px rgba(50, 100, 150, 0.4)",
  },
};

export const DelStyle: CSSObject = {
  width: "5rem",
  height: "2rem",

  fontSize: "18px",
  borderRadius: "5px",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    boxShadow: "0 0 0 1px #fff, 0 0 0 3px #ddd",
  },
};

export const MemberImage = styled.img`
  width: 38px;
  height: 38px;
  object-fit: cover;
  border-radius: 4rem;
`;

export const NoneTile = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 64vh;

  font-size: 16px;
  color: #212529;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 60px;
`;
