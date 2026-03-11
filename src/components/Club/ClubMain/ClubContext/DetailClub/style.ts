import styled from "styled-components";
import { DodamShape, DodamTypography } from "@b1nd/dds-web";

export const ClubModalContainer = styled.div`
  width: 900px;
  height: 540px;
  background-color: #fff;
  ${DodamShape.Large}
  overflow: hidden;
  display: flex;
  justify-content: center;
  z-index: 2;
  margin-top: 15px;
`;

export const ClubMiddleContainer = styled.div`
  width: 852px;
  height: 946px;
  padding: 20px;
  gap: 20px;
  display: flex;
  justify-content: center;
`;
export const ClubDescriptionWrap = styled.div`
  display: flex;
  width: 852px;
  justify-content: space-between;
  padding-top: 20px;
`;

export const ClubNameWrap = styled.div`
  display: flex;
  ${DodamTypography.Title1.Bold}
  align-items: center;
  gap: 8px;
`;
export const ClubShortDescription = styled.div`
  ${DodamTypography.Heading1.Regular}
`;

export const ClubApprovalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ClubInfoDetail = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  height: calc(100% - 146px);
  overflow: hidden;
`;

export const BetweenLine = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.lineNormal};
  margin: 35px 0;
`;

export const ExplainClubBox = styled.div`
  width: 100%;
  height: 250px;
  border: 1px solid ${({ theme }) => theme.lineAlternative};
  ${DodamShape.Small}
  overflow-y: scroll;
  padding-bottom: 20px;
  padding: 20px;
`;

export const ClubLeader = styled.span`
  display: flex;
  justify-content: end;
`;

export const Member = styled.div`
  padding-bottom: 10px;
`;

export const ExplainClubWrap = styled.div`
  width: 100%;
`;

export const WrapSkeleton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapClubMemberContainer = styled.div`
  width: fit-content;
  height: 300px;
  padding-bottom: 25px;
  overflow-y: scroll;
`;
