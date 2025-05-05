import styled, { CSSObject } from "styled-components";

export const WrapProject: CSSObject = {
  width: "100%",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderTop: "none",
  borderBottom: "1px solid rgb(217, 217, 217)",
  cursor: "default",
};

export const TDStyle: CSSObject = {
  padding: "10px",
  textAlign: "center",
  cursor: "default",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const TDClickable: CSSObject = {
  ...TDStyle,
  cursor: "pointer",
};

export const NameColumnStyle: CSSObject = {
  ...TDStyle,
  width: "80px",
  marginLeft: "10px",
};

export const DescriptionColumnStyle: CSSObject = {
  ...TDClickable,
  width: "220px",
};

export const TypeColumnStyle: CSSObject = {
  ...TDStyle,
  width: "100px",
};

export const DateColumnStyle: CSSObject = {
  ...TDStyle,
  width: "120px",
};

export const RoomColumnStyle: CSSObject = {
  ...TDStyle,
  width: "100px",
};

export const ProjectExplainWrap = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
