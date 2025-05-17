import styled from "styled-components";
import { DodamShape, DodamTypography } from "@b1nd/dds-web";

export const WrapModal = styled.div`
  width: 528px;
  height: 400px;
  padding: 24px;
  background-color: ${({ theme }) => theme.backgroundNeutral};
  ${DodamShape.ExtraLarge}
  p {
    ${DodamTypography.Heading1.Bold}
  }
  div {
    ${DodamTypography.Body1.Bold}
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const WrapModalContent = styled.div`
  width: 452px;
  height: 200px;
  margin: 12px 0;
`;

export const WrapModalHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
  span {
    ${DodamTypography.Caption1.Bold}
    color: ${({ theme }) => theme.labelAlternative};
  }
`;

export const ExplainRoomTxt = styled.span`
  ${DodamTypography.Caption2.Regular}
  color: ${({ theme }) => theme.statusNegative};
  margin: -3px 0 8px;
`;

export const WrapExplainRoom = styled.div`
  display: flex;
  flex-direction: column;
`;
