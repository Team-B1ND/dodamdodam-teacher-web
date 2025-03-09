import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const ClubMainContainer = styled.div`
  width: 924px;
  height: auto;
  min-height: 705px;
  border-radius: 18px;
  padding: 24px;
  margin-left: 16px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  overflow-y: scroll;
  padding-top: 40px;
`;

export const ClubManageFont = styled.div`
  gap: 12px;

  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Heading1.Bold}
`;

export const ClubMenuButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const MainClubListContainer = styled.div`
  display: flex;
  width: 876px;
  height: 532px;
  flex-direction: column;
`;

export const WrapSegmentedButton = styled.div`
  z-index: 1;
`;
