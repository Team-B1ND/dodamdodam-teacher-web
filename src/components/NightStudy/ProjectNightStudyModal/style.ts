import styled from "styled-components";
import { DodamShape, DodamTypography } from "@b1nd/dds-web";

export const ProjectModalWrap = styled.div`
  width: 620px;
  height: 460px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  padding: 30px;
  ${DodamShape.Small}
`;

export const NightStudyTitle = styled.div`
  ${DodamTypography.Heading1.Bold}
  margin-top: 10px;
`;
export const NightStudyReason = styled.div`
  ${DodamTypography.Headline.Medium}
`;
export const NightStudyDate = styled.div`
  ${DodamTypography.Body2.Regular}
  margin-left: 10px;
`;
export const NightStudyOption = styled.div`
  ${DodamTypography.Body2.Medium}
`;
export const NightStudyFlex = styled.div`
  display: flex;
`
export const NightStudyPeople = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`
export const NightStudyStartConatiner = styled.div`
  display: flex;
  margin-top: 10px;
`