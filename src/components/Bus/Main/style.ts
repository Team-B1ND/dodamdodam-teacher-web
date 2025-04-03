import { DodamShape, DodamTypography } from '@b1nd/dds-web'
import styled from 'styled-components'

export const BusMainWrap = styled.div`
  width: 65%;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 24px;

  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.ExtraSmall}

  gap: 12px;
`

export const TitleWrap = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    ${DodamTypography.Heading1.Bold}
    color: ${({ theme }) => theme.labelNormal};
  }
`

export const IconWrap = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`

export const PageDescription = styled.span`
  ${DodamTypography.Headline.Bold}
  color: ${({ theme }) => theme.labelNormal};
`

export const ListWrap = styled.div`
  width: 100%;
  height: fit-content;

  padding-top: 10px;

  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;

  overflow: auto;
`

export const BusPeriodCell = styled.div`
  width: 100%;
  height: fit-content;
  padding: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  ${DodamShape.ExtraSmall}

  span {
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Body1.Medium}
  }

  &:hover {
    background-color: ${({ theme }) => theme.backgroundAlternative};
  }
`
