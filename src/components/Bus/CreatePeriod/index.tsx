import React, { Dispatch, SetStateAction } from 'react'
import * as S from './style'
import { DodamDatePicker, DodamFilledButton } from '@b1nd/dds-web'
import { useRegistBus } from 'hooks/Bus/useRegistBus'

interface CreatePeriodProps {
  setSection: Dispatch<SetStateAction<string>>
  setPeriodData: Dispatch<SetStateAction<{ startAt: string; endAt: string }>>
}

const CreatePeriod = ({
  setSection,
  setPeriodData,
}: CreatePeriodProps) => {
  const { registerBusData, handleRegisterBusData } = useRegistBus({
    setSection,
  })
  return (
    <S.CreatePeriodContainer>
      <S.CreatePeriodTitle>버스 탑승 기간 생성</S.CreatePeriodTitle>
      <S.CreatePeriodWrap>
        <S.DateWrap>
          <h1>탑승 시작 날짜</h1>
          <DodamDatePicker
            title='탑승 시작 날짜'
            itemKey='startDate'
            dateType='MonthDay'
            value={registerBusData.startAt}
            onChange={(e) => {
              handleRegisterBusData(e, 'startAt')
            }}
            color='primaryNormal'
          />
        </S.DateWrap>
        <S.DateWrap>
          <h1>탑승 종료 날짜</h1>
          <DodamDatePicker
            title='탑승 종료 날짜'
            itemKey='startDate'
            dateType='MonthDay'
            value={registerBusData.endAt}
            onChange={(e) => {
              handleRegisterBusData(e, 'endAt')
            }}
            color='primaryNormal'
          />
        </S.DateWrap>
      </S.CreatePeriodWrap>
      <S.ButtonWrap>
        <DodamFilledButton
          size='Large'
          text='뒤로가기'
          backgroundColorType='Assistive'
          textTheme='labelNormal'
          onClick={() => setSection('main')}
          width={120}
        />
        <DodamFilledButton
          size='Large'
          text='다음'
          backgroundColorType='Primary'
          textTheme='staticWhite'
          onClick={() => {
            setPeriodData(registerBusData)
            setSection('selectBus')
          }}
          width={100}
        />
      </S.ButtonWrap>
    </S.CreatePeriodContainer>
  )
}

export default CreatePeriod
