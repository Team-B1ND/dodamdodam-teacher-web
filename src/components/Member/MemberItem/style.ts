import styled, { CSSObject } from "styled-components";

export const MemberTBody: CSSObject = {
  width: "100%",
  fontSize: "14px",
  fontWeight: "600",
  marginTop: "10px",
  display: "flex",
  rowGap: "5px",
  flexDirection: "column",
};

export const MemberItemTR: CSSObject = {
  width: "100%",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderTop: "1px solid #d9d9d9",
  borderBottom: "1px solid #d9d9d9",
};

export const MemberImage = styled.img`
  width: 38px;
  height: 38px;
  object-fit: cover;
  border-radius: 4rem;
`;

export const MemberTD: CSSObject = {
  width: "14%",
};

export const ScrollEmailText = styled.p`
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
