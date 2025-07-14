import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";
import { hexToRgba } from "@b1nd/dds-web";

export const CreateBusMemberContainer = styled.div`
  width: 640px;
  ${DodamShape.Medium}
  border: 1px ${({ theme }) => theme.lineAlternative} solid;
  height: 600px;
  padding: 20px;
  gap: 16px;
  background-color: ${({ theme }) => theme.backgroundNormal};
`;
export const CreateBusMemberWrap = styled.div`
  display: flex;
  gap: 16px;
  height: 470px;
  overflow-y: scroll;
`;

export const BusMemberHeader = styled.div`
  display: flex;
  p {
    ${DodamTypography.Heading1.Bold}
  }
  padding-bottom: 10px;
  align-items: center;
  justify-content: space-between;
`;
export const CreateBusMemberSearch = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
`;

export const CreateBusMemberList = styled.div`
  ${DodamShape.Small}
  border: 1px ${({ theme }) => theme.lineAlternative} solid;
  background-color: transparent;
  height: 100%;
  overflow-y: scroll;
  padding: 8px 12px;
`;

export const CreateBusMemberSelected = styled.div`
  display: flex;
  flex-direction: column;
  ${DodamShape.Small}
  border: 1px ${({ theme }) => theme.lineAlternative} solid;
  background-color: transparent;
  height: 100%;
  width: 50%;
  padding: 8px 12px;
  overflow-y: scroll;
`;

export const CreateBusTypeSelect = styled.select`
  width: 100%;
  height: 56px;
  ${DodamShape.Medium}
  ${DodamTypography.Headline.Medium}
  border: 1px ${({ theme}) => theme.lineAlternative} solid;
  background-color: ${({ theme }) => hexToRgba(theme.backgroundNormal, 0.65)};
  color: ${({ theme }) => theme.labelNormal};
  padding: 0 16px;
  cursor: pointer;
  outline: none;
  appearance: none;
`;
