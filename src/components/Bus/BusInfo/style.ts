import { DodamShape, DodamTypography } from '@b1nd/dds-web'
import styled from 'styled-components'

export const BusInfoWrap = styled.div`
  width: 65%;
  height: 100%;
  padding: 24px;

  display: flex;
  flex-direction: column;

  ${DodamShape.ExtraSmall}
  background-color: ${({ theme }) => theme.backgroundNormal};

  gap: 30px;
`

export const BusInfoHeaderWrap = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
`

export const IconWrap = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  align-items: center;

  cursor: pointer;
`

export const BusInfoTitleWrap = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;

  h1 {
    ${DodamTypography.Heading1.Bold}
    color: ${({ theme }) => theme.labelNormal};
  }

  div {
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  span {
    ${DodamTypography.Headline.Medium}
    color: ${({ theme }) => theme.labelAssistive};
  }
`

export const BusInfoListWrap = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    ${DodamTypography.Body2.Medium}
    color: ${({ theme }) => theme.labelAlternative};
  }
`

export const BusInfoMemberWrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  gap: 30px;
`

export const MemberCell = styled.div`
  width: 97%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;

    width: fit-content;
    height: 100%;
  }

  h1 {
    ${DodamTypography.Body1.Medium}
    color: ${({ theme }) => theme.labelNormal};
  }

  span {
    ${DodamTypography.Body1.Medium}
    color: ${({ theme }) => theme.labelAssistive};
  }
`
