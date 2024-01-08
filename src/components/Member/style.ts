import styled, { CSSObject } from "styled-components";

export const MemberContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 2.5rem;
  white-space: nowrap;
`;

export const SelectSeachContainer = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const MemberTable: CSSObject = {
  width: "100%",
  marginTop: "14px",
};

export const MemberTR: CSSObject = {
  width: "100%",
  fontSize: "15px",
  fontWeight: "bold",
  boxShadow: "0 4px 4px -2px rgba(0, 0, 0, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
