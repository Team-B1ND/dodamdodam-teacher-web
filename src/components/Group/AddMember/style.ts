import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const AddMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 12px;
  overflow: hidden;
`;

export const AddMemberBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 15px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.ExtraSmall};
`;

export const AddMemberTitle = styled.div`
  display: flex;
  align-items: center;
  p {
    cursor: pointer;
    ${DodamTypography.Heading1.Bold}
    color: ${({ theme }) => theme.labelNormal};
  }
`;

export const AddMemberDataBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px 0 10px 0;
  width: 100%;
  height: 485px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const AddMemberButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 48px;
  gap: 8px;
`;

export const AddMemberItemWrap = styled.div<{ isSelect: boolean }>`
  width: auto;
  height: auto;

  display: flex;
  flex-direction: column;

  gap: 16px;
  margin: 5px 0;

  background-color: ${({ isSelect, theme }) => isSelect ? theme.backgroundNetural : "transparent"};

  ${DodamShape.ExtraSmall}
`;

export const AddMemberItemBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: auto;
  padding: 12px 20px;
  ${DodamShape.ExtraSmall}

  p {
    ${DodamTypography.Body1.Medium};
    color: ${({ theme }) => theme.labelNormal};
  }

  &:hover {
    background-color: ${({ theme }) => theme.fillNeutral};
  }
`;

export const AddMemberItem = styled.div`
  width: auto;
  height: auto;

  display: flex;
  flex-direction: column;

  gap: 12px;
  margin-bottom: 10px;
`;

export const MemberAllSelectButton = styled.div`
  width: auto;
  height: auto;

  display: flex;

  padding: 4px 10px;
  margin: 0 10px;
  gap: 8px;

  cursor: pointer;

  p {
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Body1.Bold}
  }
`;

export const AddMember = styled.div`
  width: auto;
  height: auto;

  display: flex;
  justify-content: space-between;

  ${DodamShape.ExtraSmall}
  padding: 10px 4px 10px 8px;
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.fillNeutral};
  }
`;

export const AddMemberInfo = styled.div`
  width: auto;
  height: auto;

  display: flex;
  align-items: center;

  gap: 8px;

  img {
    width: 24px;
    height: 24px;

    border-radius: 50%;
  }

  p {
    color: ${({ theme }) => theme.labelNormal} ${DodamTypography.Body1.Medium};
  }
`;

export const AddMemberIconWrap = styled.div`
  width: 24px;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.fillNormal};
`;
