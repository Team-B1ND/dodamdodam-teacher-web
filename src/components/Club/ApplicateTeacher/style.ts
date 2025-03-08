import { DodamShape, DodamTypography } from '@b1nd/dds-web'
import styled, { CSSObject } from 'styled-components'

export const ApplicateTeacherWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  gap: 10px;

  width: 65%;
  height: 100%;
  padding: 28px;

  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.Large}
`

export const ApplicateTeacherTitle = styled.h1`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Heading1.Bold}
`

export const ClubTBody: CSSObject = {
  width: '100%',
  fontSize: '14px',
  fontWeight: '600',
  display: 'flex',
  flexDirection: 'column',
}

export const ClubItemTR: CSSObject = {
  width: '100%',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderTop: 'none',
  borderBottom: '1px solid #d9d9d9',
  padding: '0 10px',
}

export const ClubTD: CSSObject = {
  width: '10.5%',
  padding: 0,
}
