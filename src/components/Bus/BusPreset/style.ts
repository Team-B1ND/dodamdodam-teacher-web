import { DodamShape, DodamTypography } from '@b1nd/dds-web'
import styled from 'styled-components'

export const BusPresetContainer = styled.div`
  width: 30%;
  height: 35%;

  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.ExtraSmall}
`

export const BussPresetTitleWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;

  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Heading1.Bold}
  }
`

export const IconWrap = styled.div`
  width: 45px;
  height: 45px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`
export const BusPresetListContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Headline.Medium}
  }
`
