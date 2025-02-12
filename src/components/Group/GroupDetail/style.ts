import { DodamShape, DodamTypography } from '@b1nd/dds-web';
import styled from 'styled-components';

export const GroupDetailWrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const GroupWrap = styled.div`
  width: 70%;
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
`;

export const GroupDetailHeader = styled.div`
  width: 100%;
  height: 15%;
  padding: 8px 16px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
`;

export const GroupDetailTitle = styled.div`
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

export const GroupDetailDescription = styled.span`
  width: 100%;
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Body1.Medium}
  line-height: 1.5;
  overflow-wrap: break-word;
`;

export const GroupDetailMemberWrap = styled.div`
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

  &:hover {
    background-color: ${({ theme }) => theme.fillNetural};
  }
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
