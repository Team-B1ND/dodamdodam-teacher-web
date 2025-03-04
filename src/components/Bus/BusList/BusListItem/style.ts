import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import { styled } from "styled-components";

export const ItemBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  padding: 0 10px 0 10px;
  ${DodamShape.ExtraSmall}
  p {
    ${DodamTypography.Body1.Medium};
    color: ${({ theme }) => theme.labelNormal};
  }
  &:hover {
    background-color: ${({ theme }) => theme.fillNeutral};
  }
`
