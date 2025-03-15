import { DodamShape, DodamTypography } from '@b1nd/dds-web'
import styled from 'styled-components'

export const CreatePeriodContainer = styled.div`
  width: 65%;
  height: 100%;
  padding: 24px;

  display: flex;
  flex-direction: column;

  gap: 12px;

  ${DodamShape.ExtraSmall}
  background-color: ${({ theme }) => theme.backgroundNormal};
`

export const CreatePeriodTitle = styled.h1`
  display: flex;
  align-self: flex-start;

  ${DodamTypography.Heading1.Bold}
  color: ${({ theme }) => theme.labelNormal};
`

export const CreatePeriodWrap = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const DateWrap = styled.div`
  width: 100%;
  height: fit-content;

  padding: 8px 0px 8px 0px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 12px;
  }

  h1 {
    color: ${({ theme }) => theme.labelAlternative};
  }

  input[type='time'] {
    border: none;
    color: ${({ theme }) => theme.primaryNormal};
    ${DodamTypography.Body1.Medium}

    cursor: pointer;
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
