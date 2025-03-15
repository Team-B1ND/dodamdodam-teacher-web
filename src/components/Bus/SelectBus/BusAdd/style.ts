import { DodamShape, DodamTypography } from '@b1nd/dds-web'
import styled from 'styled-components'

export const BusAddWrap = styled.div`
  width: 33%;
  height: 60%;
  padding: 24px;

  ${DodamShape.ExtraSmall}
  background-color: ${({ theme }) => theme.backgroundNormal};

  display: flex;
  flex-direction: column;
`

export const BusAddTitle = styled.h1`
  display: flex;
  align-self: flex-start;

  ${DodamTypography.Heading1.Bold}
  color: ${({ theme }) => theme.labelNormal};
`

export const InputWrap = styled.div`
  width: 100%;
  height: 75%;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  margin-top: 15px;
`

export const DateWrap = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
  }

  h1 {
    ${DodamTypography.Headline.Medium}
    color: ${({ theme }) => theme.labelNormal};
  }

  input[type='time'] {
    width: 120px;
    border: none;
    margin-left: 10px;

    ${DodamTypography.Headline.Regular}
    color: ${({ theme }) => theme.primaryNormal};
  }

  input[type='text'] {
    width: 15%;
    border: none;

    ${DodamTypography.Headline.Regular}
    color: ${({ theme }) => theme.primaryNormal};

    &:focus {
      outline: none;
    }
  }
`

export const ButtonWrap = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  margin-top: auto;
`
