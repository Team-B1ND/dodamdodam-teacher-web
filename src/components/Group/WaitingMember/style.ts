import { DodamShape, DodamTypography } from '@b1nd/dds-web';
import styled from 'styled-components';

export const WaitingMemberContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const WaitingMemberWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.Large};
  gap: 10px;
`;

export const BackIconWrap = styled.div`
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const WaitingMemberHeader = styled.div`
  width: 100%;
  height: 15%;
  padding: 8px 16px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
`;

export const WaitingMemberTitle = styled.h1`
  padding-left: 16px;
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Heading1.Bold}
`;

export const WaitingMemberList = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  padding: 28px 16px 8px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const ListWrap = styled.div`
  width: 100%;
  height: 85%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  p {
    color: ${({ theme }) => theme.labelAlternative};
    ${DodamTypography.Body2.Medium}
  }
`;

export const ListItemWrap = styled.div`
  width: 100%;
  height: 90%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MemberCell = styled.div`
  width: 100%;
  height: 13%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MemberInfo = styled.div`
  width: 70%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MemberInfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  p {
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Body1.Medium}
  }

  span {
    color: ${({ theme }) => theme.labelAssisitive};
    ${DodamTypography.Body1.Medium}
  }
`;

export const MemberRole = styled.span`
  color: ${({ theme }) => theme.labelAlternative};
  ${DodamTypography.Body2.Medium}
`;

export const ButtonWrap = styled.div`
  width: 20%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 16px;
`;
