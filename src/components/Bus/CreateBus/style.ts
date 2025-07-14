import styled from "styled-components";
import { DodamTypography, DodamShape } from "@b1nd/dds-web";
export const CreateBusBox = styled.div`
  width: 381px;
  height: fit-content;
  background-color: ${({ theme }) => theme.backgroundNormal};
  div {
    ${DodamTypography.Heading1.Bold}
  }
  ${DodamShape.Large};
  padding: 24px 20px;
`;
