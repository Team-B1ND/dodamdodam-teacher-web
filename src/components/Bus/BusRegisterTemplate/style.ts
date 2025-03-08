import { DodamShape, DodamTypography } from '@b1nd/dds-web'
import styled from 'styled-components'

export const BusAddContainer = styled.div`
  width: 65%;
  height: 100%;

  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
  }

  padding: 24px;
  gap: 12px;

  background-color: ${({ theme }) => theme.backgroundNormal};

  ${DodamShape.ExtraSmall}
`

export const BusAddTitleWrap = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 16px;

  h1 {
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Heading1.Bold}
  }
`

export const BusAddForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: fit-content;
`

export const BusDateWrap = styled.div`
  width: 97%;
  height: fit-content;

  display: flex;
  flex-direction: column;

  padding: 8px 0px;

  justify-content: space-between;

  div {
    width: 100%;

    display: flex;

    gap: 10px;
  }

  p {
    color: ${({ theme }) => theme.labelAlternative};
    ${DodamTypography.Headline.Medium}
  }

  input[type='time'] {
    border: none;

    color: ${({ theme }) => theme.primaryNormal};

    ${DodamTypography.Headline.Regular}
  }
`

export const BusTimeWrap = styled.div`
  width: 97%;
  height: fit-content;

  display: flex;

  padding: 8px 0px;

  justify-content: space-between;

  p {
    color: ${({ theme }) => theme.labelAlternative};
    ${DodamTypography.Headline.Medium}
  }

  input[type='time'] {
    border: none;

    color: ${({ theme }) => theme.primaryNormal};

    ${DodamTypography.Headline.Regular}
  }
`

export const BusButtonWrap = styled.div`
  width: 97%;
  height: fit-content;
  display: flex;

  justify-content: flex-end;

  gap: 10px;
`
