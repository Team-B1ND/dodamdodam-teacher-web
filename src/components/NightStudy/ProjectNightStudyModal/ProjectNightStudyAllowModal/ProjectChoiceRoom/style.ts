import styled from "styled-components";
import { DodamTypography } from "@b1nd/dds-web";

export const WrapRoomTag = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  margin-bottom: 2px;
  span {
    ${DodamTypography.Caption1.Bold}
  }
`;

export const WrapRoomTagAndExplain = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 36px;

  p {
    ${DodamTypography.Caption2.Bold}
    color: ${({ theme }) => theme.primaryNormal};
    margin-left: 22px;
  }
`;

export const RoomsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  width: fit-content;
  height: 100px;
`;

export const RoomLabel = styled.span<{
  isAvailable: boolean;
  isSelected: boolean;
}>`
  ${DodamTypography.Caption1.Bold}
  color: ${(props) => {
    if (!props.isAvailable) return props.theme.labelDisabled;
  }};
`;

export const StatusText = styled.p<{ isAvailable: boolean }>`
  ${DodamTypography.Caption2.Bold}
  color: ${(props) =>
    props.isAvailable ? props.theme.primaryNormal : props.theme.labelDisabled};
  margin-left: 22px;
`;
