import React, { Dispatch, SetStateAction } from 'react'
import * as S from './style'
import { DodamFilledButton } from '@b1nd/dds-web'
import {
  BusDateAndList,
  BusDateAndListResponse,
  BusListByPeriodResponse,
} from 'types/Bus/bus.type'
import { CreateBusPeriodParam } from 'repositories/Bus/BusRepository'
import { start } from 'repl'
import BusAdd from '../SelectBus/BusAdd'

interface BusListTemplateProps {
  setSection: Dispatch<SetStateAction<string>>
  busListData?: BusDateAndListResponse
  busPeriodListData?: BusListByPeriodResponse
  handleBusIds?: (id: number) => void
  busIds?: number[]
  setIsAdd?: Dispatch<SetStateAction<boolean>>
  createBusPeriod?: (param: CreateBusPeriodParam) => void
  title: string
  endAt?: string
  startAt?: string
  isAdd?: boolean
}

const BusListTemplate = ({
  setSection,
  busListData,
  busPeriodListData,
  handleBusIds,
  busIds,
  setIsAdd,
  createBusPeriod,
  title,
  endAt,
  startAt,
  isAdd,
}: BusListTemplateProps) => {
  return (
    <>
      <S.SelectBusWrap>
        <S.SelectBusTitle>{title}</S.SelectBusTitle>
        <S.ListWrap>
          {title === '버스 등록'
            ? busListData?.data.map((bus) => (
                <S.BusCell key={bus.id}>
                  <span>{bus.busName}</span>
                  <DodamFilledButton
                    text='선택'
                    size='Small'
                    textTheme='staticWhite'
                    backgroundColorType='Primary'
                    typography={['Body2', 'Regular']}
                    width={65}
                    onClick={() => handleBusIds?.(bus.id)}
                  />
                </S.BusCell>
              ))
            : busPeriodListData?.data.map((bus) => (
                <S.BusCell key={bus.bus.id}>
                  <span>{bus.bus.busName}</span>
                  <DodamFilledButton
                    text='선택'
                    size='Small'
                    textTheme='staticWhite'
                    backgroundColorType='Primary'
                    typography={['Body2', 'Regular']}
                    width={65}
                  />
                </S.BusCell>
              ))}
        </S.ListWrap>
        {title === '버스 등록' && (
          <S.ButtonWrap>
            <DodamFilledButton
              size='Large'
              text='뒤로가기'
              backgroundColorType='Assistive'
              textTheme='labelNormal'
              onClick={() => setSection('createPeriod')}
              width={120}
            />
            <DodamFilledButton
              size='Large'
              text='새 버스 추가'
              backgroundColorType='Primary'
              textTheme='staticWhite'
              typography={['Body1', 'Medium']}
              onClick={() => setIsAdd?.(true)}
              width={135}
            />
            <DodamFilledButton
              size='Large'
              text='버스 등록'
              backgroundColorType='Primary'
              textTheme='staticWhite'
              onClick={() => {
                const param: CreateBusPeriodParam = {
                  startAt: startAt!,
                  endAt: endAt!,
                  busId: busIds!,
                }
                createBusPeriod?.(param)
              }}
              width={120}
            />
          </S.ButtonWrap>
        )}
      </S.SelectBusWrap>
      {title === '버스 등록' && (
        <BusAdd isOpen={isAdd!} close={() => setIsAdd?.(false)} />
      )}
    </>
  )
}

export default BusListTemplate
