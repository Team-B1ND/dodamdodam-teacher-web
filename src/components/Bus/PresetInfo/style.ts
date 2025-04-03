import { DodamShape, DodamTypography } from '@b1nd/dds-web'
import styled from 'styled-components'

export const PresetInfoWrap = styled.div`
  width: 65%;
  height: 100%;

  padding: 24px;

  display: flex;
  flex-direction: column;

  ${DodamShape.ExtraSmall}
  background-color: ${({ theme }) => theme.backgroundNormal};

  gap: 40px;
`

export const PresetInfoTitle = styled.h1`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Heading1.Bold}
`

export const BusDescriptionWrap = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;

  justify-content: flex-start;

  gap: 16px;

  div {
    width: fit-content;
    height: fit-content;

    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  h1 {
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Heading2.Bold}
  }

  span {
    color: ${({ theme }) => theme.labelAssistive};
    ${DodamTypography.Body1.Medium}
  }
`

export const DateWrap = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;

  p {
    color: ${({ theme }) => theme.labelAssistive};
    ${DodamTypography.Body1.Medium}
  }
`

export const ButtonWrap = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: flex-end;
  gap: 5px;

  margin-top: auto;
`
