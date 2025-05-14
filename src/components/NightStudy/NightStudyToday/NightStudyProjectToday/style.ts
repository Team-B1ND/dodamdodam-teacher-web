import type { CSSObject } from "styled-components";

const TRWrapStyles: CSSObject = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};

export const TDProjectNameStyle: CSSObject = {
  ...TRWrapStyles,
  textAlign: "left",
  width: "180px"
};

export const TDNameStyle: CSSObject = {
  ...TRWrapStyles,
  textAlign: "left",
  width: "160px",
};

export const TDStudentStyle: CSSObject = {
  ...TRWrapStyles,
  textAlign: "left",
  width: "130px",
};

export const TDRoomStyle: CSSObject = {
  ...TRWrapStyles,
  textAlign:"center",
  width: "120px",
};