import { DodamShape, DodamTypography } from '@b1nd/dds-web'
import styled from 'styled-components'
import bus from 'assets/bus.svg'

export const BusInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 35%;
  height: 100%;
  padding: 1.5rem 2rem 1rem 2rem;

  background-color: ${({ theme }) => theme.backgroundNormal};
  ${DodamShape.Medium};
`

export const BusInfoHeader = styled.h1`
  height: fit-content;
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Title3.Bold};

  margin-bottom: 1rem;
`

export const Bus = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 1rem;

  background: url(${bus});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  justify-self: stretch;
  gap: 13px;

  position: relative;
`

export const SeatRow = styled.div`
  width: 65%;
  display: flex;
  justify-content: space-between;
`

export const Seat = styled.button<{ occupied: boolean }>`
  width: 45px;
  height: 45px;

  border: none;
  background-color: ${({ theme, occupied }) =>
    occupied ? theme.primaryNormal : theme.backgroundNormal};
  border-radius: 5px;
  color: ${({ occupied }) => (occupied ? '#FFFFFF' : '#000000')};
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`
