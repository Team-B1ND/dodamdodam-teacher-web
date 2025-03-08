import styled from 'styled-components'
import { DodamShape, DodamTheme, DodamTypography } from '@b1nd/dds-web'

export const ClubDateWrapBox = styled.div`
  width: 265px;
  height: 260px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.Large}
  padding: 28px;
  gap: 4px;
  margin-bottom: 16px;
`

export const ClubTitle = styled.div`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Heading2.Bold}
`

export const ClubContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const WrapDatePicker = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`
