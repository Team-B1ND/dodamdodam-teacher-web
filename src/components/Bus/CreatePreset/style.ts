import { DodamShape, DodamTypography } from '@b1nd/dds-web'
import styled from 'styled-components'

export const CreateBusPresetWrap = styled.div`
  width: 65%;
  height: 100%;
  padding: 24px;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.ExtraSmall}
`

export const CreateBusPresetTitle = styled.h1`
  width: fit-content;
  height: fit-content;

  ${DodamTypography.Heading1.Bold}
  color: ${({ theme }) => theme.labelNormal};
`

export const CreateBusPresetInputWrap = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 40px;

  margin-top: 25px;
`

export const CreateBusPresetDateWrap = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.labelAlternative};
    ${DodamTypography.Headline.Medium}
  }

  input[type='time'] {
    border: none;
    color: ${({ theme }) => theme.primaryNormal};
    ${DodamTypography.Headline.Regular}

    &:focus {
      outline: none;
    }
  }
`

export const ButtonWrap = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;

  margin-top: auto;
`
