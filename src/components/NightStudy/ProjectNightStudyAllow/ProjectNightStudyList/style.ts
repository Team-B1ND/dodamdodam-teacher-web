import styled, {CSSObject} from "styled-components";
import { DodamTypography } from "@b1nd/dds-web";

export const MemberTBody: CSSObject = {
    width: "100%",
    fontSize: "14px",
    fontWeight: "600",
    display: "flex",
    flexDirection: "column",
  };

export const NoProjects = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${DodamTypography.Body1.Regular}
`
