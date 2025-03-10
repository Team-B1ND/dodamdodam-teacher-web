import { DodamShape, DodamTypography } from '@b1nd/dds-web'
import styled from 'styled-components'

export const BusPresetInfoContainer = styled.div`
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

export const BusPresetInfoTitleWrap = styled.div`
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

export const BusPresetInfoWrap = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;

  gap: 10px;

  margin-bottom: 30px;

  div {
    width: 100%;

    display: flex;
    flex-direction: column;

    h1 {
      ${DodamTypography.Heading2.Bold}
      color: ${({ theme }) => theme.labelNormal};
    }

    span {
      ${DodamTypography.Body1.Medium}
      color: ${({ theme }) => theme.labelAssistive};
      height: fit-content;
    }
  }
`

export const BusPresetUseWrap = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;

  gap: 50px;

  h1 {
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Heading1.Bold}
  }

  div {
    height: fit-content;
    display: flex;

    align-items: center;
    justify-content: space-between;

    h1 {
      width: 10%;
      color: ${({ theme }) => theme.labelAlternative};
      ${DodamTypography.Headline.Medium}
    }
  }
`
export const BusPresetButtonWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;

  justify-content: flex-end;

  gap: 10px;

  margin-top: 50px;
`
