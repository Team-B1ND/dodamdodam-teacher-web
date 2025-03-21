import styled from 'styled-components'
import { DodamTypography } from '@b1nd/dds-web'

export const ClubItemWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 876px;
  height: 48px;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundNormal};
`

export const WrapCheckBox = styled.div`
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 0 8px;
`

export const WrapClubName = styled.div`
  display: flex;
  align-items: center;
  width: 160px;
  height: 27px;
  padding: 0 8px;
`

export const ClubName = styled.div`
  ${DodamTypography.Headline.Bold}
  cursor: pointer;
  text-overflow: ellipsis;
`

export const DetailClubContext = styled.div`
  ${DodamTypography.Body1.Medium}
`

export const SubjectClub = styled(DetailClubContext)`
  width: 84px;
  height: 24px;
  padding: 0 8px;
  gap: 10px;
  display: flex;
`
export const ShortDescription = styled(DetailClubContext)`
  width: 240px;
  height: 24px;
  padding: 0 8px;
  gap: 10px;
  display: flex;
  text-overflow: ellipsis;
`

export const WhoClubLeader = styled(DetailClubContext)`
  width: 100px;
  height: 24px;
  padding: 0 8px;
  gap: 10px;
  display: flex;
`
export const StateClub = styled.div`
  width: 204px;
  height: 10px;
`
export const CircleStateButoonContainer = styled.div`
  width: 40px;
  height: 10px;
  padding: 0 8px;
  gap: 8px;
  display: flex;
`

export const ClubLine = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.lineNormal};
`
