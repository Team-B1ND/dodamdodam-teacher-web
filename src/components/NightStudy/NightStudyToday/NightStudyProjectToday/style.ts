import type { CSSObject } from "styled-components";

const trWrapStyles: CSSObject = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};

export const TDProjectNameStyle: CSSObject = {
  ...trWrapStyles,
  textAlign: "left",
  width: "180px"
};

export const TDNameStyle: CSSObject = {
  ...trWrapStyles,
  textAlign: "left",
  width: "160px",
};

export const TDStudentStyle: CSSObject = {
  ...trWrapStyles,
  textAlign: "left",
  width: "130px",
};

export const TDRoomStyle: CSSObject = {
  ...trWrapStyles,
  textAlign:"center",
  width: "120px",
};