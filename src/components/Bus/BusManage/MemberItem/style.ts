import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const MemberItemContainer = styled.div`
  width: 100%;
  min-height: 52px;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-grow: 0;
`

export const MemberInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${DodamTypography.Label.Bold}
  color: ${({ theme }) => theme.labelNormal};
`

export const MemberGradeAndRoom = styled.div`
  ${DodamTypography.Caption2.Medium}
  color: ${({ theme }) => theme.labelAlternative};
`

export const MemberItemBar = styled.div`
  flex-grow: 1;
`

export const MemberItemIconContainer = styled.div`
  display: flex;
`

export const MemberItemProfileImage = styled.img`
  width: 36px;
  aspect-ratio: 1;
  border-radius: 999px;
`