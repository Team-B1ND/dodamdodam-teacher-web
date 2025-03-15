import { DodamShape, DodamTypography } from '@b1nd/dds-web'
import styled from 'styled-components'

export const SelectBusWrap = styled.div`
  width: 65%;
  height: 100%;
  padding: 24px;

  display: flex;
  flex-direction: column;

  ${DodamShape.ExtraSmall}
  background-color: ${({ theme }) => theme.backgroundNormal};
`

export const SelectBusTitle = styled.h1`
  display: flex;
  align-self: flex-start;

  ${DodamTypography.Heading1.Bold}
  color: ${({ theme }) => theme.labelNormal};
`

export const IconWrap = styled.div`
  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const ListWrap = styled.div`
  width: 100%;
  height: fit-content;

  padding-top: 30px;

  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;

  overflow: auto;
`

export const BusCell = styled.div`
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

export const ButtonWrap = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  margin-top: auto;
`
