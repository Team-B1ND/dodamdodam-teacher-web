import styled from "styled-components";
import { DodamTypography } from "@b1nd/dds-web";

export const ClubModalContainer = styled.div`
  width: 900px;
  height: 540px;
  background-color: #fff;
  border-radius: 18px;
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
`
export const ClubDescriptionWrap = styled.div`
  display: flex;
  width: 852px;
  height: 111px;
  justify-content: space-between;
  padding-top: 20px;
`;

export const ClubTypeName = styled.div`
  ${DodamTypography.Headline.Medium}
  color: #5D5F60;
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
`;

export const ClubDescriptionBox = styled.div`
  width: 632px;
  height: 100px;
  border: 10px #e6e6e7;
`;

export const WrapButton = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BetweenLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #c4c5c6;
  margin: 35px 0;
`;

export const ExplainClubBox = styled.div`
  width: 100%;
  height: fit-content;
  border: 1px solid #e6e6e7;
  border-radius: 10px;
  margin-top: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ClubLeader = styled.span`
  margin-bottom: 16px;
  text-align: end;
`

export const Member = styled.div`
  padding-bottom: 10px;
`

export const ExplainClubWrap = styled.div`
  width: 100%;
`