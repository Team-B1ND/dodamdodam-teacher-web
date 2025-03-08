import styled from 'styled-components'
import { DodamShape, DodamTypography } from '@b1nd/dds-web'

export const ClubJoinContainer = styled.div`
  width: 321px;
  height: 205px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  padding: 18px;
  ${DodamShape.ExtraLarge}
`

export const RejectReason = styled.div`
  ${DodamTypography.Heading1.Bold}
`

export const InputBoxContainer = styled.div`
  padding: 6px;
  margin-bottom: 10px;
`

export const RejectButtonContainer = styled.div`
  display: flex;
  padding-top: 5px;
`
