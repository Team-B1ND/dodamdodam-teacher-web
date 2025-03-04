import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const GroupBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 12px;
  overflow: hidden;
`;

export const GroupPicker = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.ExtraSmall}
`;

export const GroupTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  p {
    ${DodamTypography.Heading1.Bold};
    color: ${({ theme }) => theme.labelNormal};
  }
`;
export const GroupIcon = styled.div`
  cursor: pointer;
`;

export const GroupDataBox = styled.div`
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
