import styled from "styled-components";
import { DodamShadow, DodamShape, DodamTypography } from "@b1nd/dds-web";

export const NoticeModalBox = styled.div`
  display: flex;
  width: 150px;
  height: 100px;
  padding: 10px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  ${DodamShape.ExtraSmall};
  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShadow.Strong};

  span {
    cursor: pointer;
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Body1.Bold};
  }

  span:nth-child(3) {
    color: ${({ theme }) => theme.statusNegative};
  }
`;
