import { DodamShape, DodamTypography } from '@b1nd/dds-web';
import styled from 'styled-components';

export const DivisionDetailWrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const DivisionWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.Large};
`;

export const BackIconWrap = styled.div`
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const DivisionDetailHeader = styled.div`
  width: 100%;
  height: 15%;
  padding: 8px 16px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
`;

export const DivisionDetailTitle = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Heading1.Bold}
  }

  svg {
    cursor: pointer;
  }
`;

export const DivisionDetailDescription = styled.span`
  width: 100%;
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Body1.Medium}
  line-height: 1.5;
  overflow-wrap: break-word;
`;

export const DivisionDetailMemberWrap = styled.div`
  width: 100%;
  height: 70%;

  padding: 28px 16px 8px 16px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const MemberWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const LeftSection = styled.div`
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RightSection = styled.div`
  width: 40%;
`;

export const AdminMembersWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AdimWrap = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const MemberWrapTitle = styled.p`
  color: ${({ theme }) => theme.labelAlternative};
  ${DodamTypography.Body2.Medium}
`;

export const MemberCell = styled.div`
  width: 100%;
  padding: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.backgroundElevated};
  border-radius: 8px;
  transition: background-color 0.2s ease;
  
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.fillNeutral};
  }

  cursor: pointer;
`;

export const MemberList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;

export const MemberInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`;

export const MemberName = styled.span`
  ${DodamTypography.Body2.Medium}
  color: ${({ theme }) => theme.labelPrimary};
`;

export const MemberRole = styled.span`
  ${DodamTypography.Caption1.Regular}
  color: ${({ theme }) => theme.labelSecondary};
`;

export const MembersWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 12px;
  margin-top: 8px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const DivisionDetailModalWrap = styled.div`
  display: flex;
  width: 150px;
  height: 100px;
  padding: 10px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  ${DodamShape.ExtraSmall};
  background-color: ${({ theme }) => theme.backgroundNormal};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ApplyMemberWrap = styled.div`
  cursor: pointer;
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  p {
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Body1.Bold}
  }
`;

export const MemberInfoModalWrap = styled.div`
  display: flex;
  width: 360px;
  height: 216px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  ${DodamShape.Medium};
  background-color: ${({ theme }) => theme.backgroundNormal};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const MemberInfoModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  h1 {
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Headline.Bold}
  }

  span {
    color: ${({ theme }) => theme.labelAssistive};

    ${DodamTypography.Body1.Medium}
  }
`;
