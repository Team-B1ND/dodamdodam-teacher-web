import styled from "styled-components";
import { DodamShape, DodamTypography } from "@b1nd/dds-web";

export const BusModalContainer = styled.div`
  width: 321px;
  height: 205px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.ExtraLarge}
  p {
    ${DodamTypography.Heading1.Bold}
    margin-bottom: 14px;
  }
  padding: 18px;
`;
