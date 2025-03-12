import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const DivisionBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 12px;
  overflow: hidden;
`;

export const DivisionPicker = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.ExtraSmall}
`;

export const DivisionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  p {
    ${DodamTypography.Heading1.Bold};
    color: ${({ theme }) => theme.labelNormal};
  }
`;
export const DivisionIcon = styled.div`
  cursor: pointer;
`;

export const DivisionDataBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
  padding: 10px 0 10px 0;
  width: 100%;
  height: 500px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

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
`;
