import { DodamTypography } from '@b1nd/dds-web'
import styled from 'styled-components'

export const NoClubContainer = styled.div`
  display: flex;
  width: 876px;
  height: 532px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const NoClubFont = styled.div`
  ${DodamTypography.Headline.Bold}
  color: ${({ theme }) => theme.labelStrong};
`
export const NoClubDetailFont = styled.div`
  ${DodamTypography.Label.Medium}
  color: ${({ theme }) => theme.labelStrong};
  text-align: center;
`
