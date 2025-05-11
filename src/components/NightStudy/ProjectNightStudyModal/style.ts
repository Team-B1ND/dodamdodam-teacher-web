import styled from "styled-components";
import { DodamShape, DodamTypography } from "@b1nd/dds-web";

export const ProjectModalWrap = styled.div`
  width: 640px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.Small}
  overflow: hidden;

  h2 {
    ${DodamTypography.Heading1.Bold};
    margin: 0;
  }

  span {
    ${DodamTypography.Body1.Medium};
  }

  p {
    ${DodamTypography.Body1.Regular};
    color: ${({ theme }) => theme.textSecondary};
    margin: 8px 0 20px;
  }

`;
export const ModalTag = styled.span`
    ${DodamTypography.Body2.Medium};
    padding: 4px 8px;
    border-radius: 4px;
    display: inline-block;
`
export const ModalParticipant = styled.div`
    ${DodamTypography.Body1.Medium};
    padding: 4px 0;
`
export const ModalCaption = styled.span`
    ${DodamTypography.Caption2.Medium};
    color: ${({ theme }) => theme.labelAlternative};
    margin-left: 3px;
`
export const ModalLabel = styled.div`
    ${DodamTypography.Body2.Bold};
    width: 70px;
    display: inline-block;
`
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
