import styled from 'styled-components'
import { DodamTypography } from '@b1nd/dds-web'

export const ParentsClubMember = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding-top: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
`
export const WrapClubMember = styled.div`
  display: flex;
  width: 160px;
  height: 48px;
  padding: 12px 0;
  gap: 8px;
  align-items: center;
`

export const ProfileImage = styled.div<{ img: string }>`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  background-image: ${(props) => props.img};
`

export const StudentName = styled.div`
  ${DodamTypography.Label.Medium}
`
export const StudentClass = styled.div`
  ${DodamTypography.Caption2.Medium}
  color: ${({ theme }) => theme.labelAlternative};
`
