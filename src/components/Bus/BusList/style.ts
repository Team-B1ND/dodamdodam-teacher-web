import { DodamShape, DodamTypography } from '@b1nd/dds-web'
import styled from 'styled-components'

export const BusContainer = styled.div`
  width: 65%;
  height: 100%;

  display: flex;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  padding: 12px 16px 0 16px;
`

export const BusListWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 24px;

  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.ExtraSmall}
`

export const BusListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  p {
    ${DodamTypography.Heading1.Bold};
    color: ${({ theme }) => theme.labelNormal};
  }
`

export const BusPlusIcon = styled.div`
  cursor: pointer;
`

export const BusList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
  padding: 10px 0 10px 0;
  width: 100%;
  height: 500px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`
