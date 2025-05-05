import styled from "styled-components";
import { DodamShape, DodamTypography, DodamLightTheme } from "@b1nd/dds-web";

export const ProjectModalWrap = styled.div`
  width: 640px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  border-radius: 16px;
  ${DodamShape.Small}
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  position: relative;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 24px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  img {
    width: 40px;
    height: 40px;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 24px;
  top: 50%;
  cursor: pointer;
`;

export const ContentSection = styled.div`
  padding: 24px;
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const NightStudyTitle = styled.h2`
  ${DodamTypography.Heading1.Bold}
  margin: 0;
`;

export const ProjectTypeTag = styled.span`
  ${DodamTypography.Body2.Medium}
  padding: 4px 8px;
  border-radius: 4px;
`;

export const NightStudyReason = styled.p`
  ${DodamTypography.Body1.Regular}
  color: ${({ theme }) => theme.textSecondary};
  margin: 8px 0 20px 0;
`;

export const DetailsContainer = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 40px;
`;

export const DetailsColumn = styled.div`
  flex: 1;
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const DetailLabel = styled.span`
  ${DodamTypography.Body2.Bold}
  width: 70px;
`;

export const DetailValue = styled.span`
  ${DodamTypography.Body1.Medium}
`;

export const ParticipantsColumn = styled.div`
  flex: 1.5;
`;

export const ParticipantsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 160px;
  overflow-y: auto;
`;

export const ParticipantItem = styled.div`
  ${DodamTypography.Body1.Medium}
  padding: 4px 0;
`;

export const MemberCount = styled.span`
  ${DodamTypography.Caption2.Medium}
  margin-left: 3px;
  color: ${DodamLightTheme.labelAlternative};
`;
