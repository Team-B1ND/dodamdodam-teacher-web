import { DodamShape, DodamTypography } from '@b1nd/dds-web'
import styled from 'styled-components'

export const SidePresetContainer = styled.div`
  width: 30%;
  height: 35%;

  ${DodamShape.ExtraSmall}
  background: ${({ theme }) => theme.backgroundNormal};

  padding: 24px;

  overflow-y: auto;
`

export const SidePresetTitleWrap = styled.div`
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
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`

export const ListWrap = styled.div`
  width: 100%;
  height: fit-content;

  padding-top: 10px;

  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;

  overflow-y: scroll;
`

export const BusCell = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;
  ${DodamShape.ExtraSmall}

  span {
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Body1.Medium}
  }
`

export const NoneBusPrestWrap = styled.div`
  width: 100%;
  height: 90%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  span {
    color: ${({ theme }) => theme.labelAlternative};
    ${DodamTypography.Label.Medium}
  }
`
