import styled, { CSSObject } from "styled-components";

export const MemberTBody: CSSObject = {
  width: "100%",
  fontSize: "14px",
  fontWeight: "600",
  marginTop: "5px",
  display: "flex",
  flexDirection: "column",
};

export const MemberItemTR: CSSObject = {
  width: "100%",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderTop: "none",
  borderBottom: "1px solid #d9d9d9",
  backgroundColor: "white",
};

export const MemberImage = styled.img`
  width: 38px;
  height: 38px;
  object-fit: cover;
  border-radius: 4rem;
`;

export const MemberTD: CSSObject = {
  width: "10.5%",
};

export const ScrollEmailText = styled.p`
  width: 140px;
  padding: 2px;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
