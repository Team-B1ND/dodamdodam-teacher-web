import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const ClubMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: auto;
  min-height: 705px;
  border-radius: 18px;
  padding: 24px;
  margin: 0 16px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  overflow-y: scroll;
  flex-grow: 1;
`;

export const ClubManageFont = styled.div`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Heading1.Bold}
`;

export const MainClubListContainer = styled.div`
  display: flex;
  height: 532px;
  flex-direction: column;
`;