import React from 'react'
import * as S from './style'
import {
  DodamDatePicker,
  DodamFilledButton,
  DodamTextField,
} from '@b1nd/dds-web'
import { useRegistBus } from 'hooks/Bus/useRegistBus'

interface BusAddProps {
  isOpen: boolean
  close: () => void
}

const BusAdd = ({ isOpen, close }: BusAddProps) => {
  const { busData, handleBusData, handleLeaveDataDate, submitRegistBus } = useRegistBus({ setSection: () => {} })
  return (
    <>
      {isOpen && (
        <S.BusAddWrap>
          <S.BusAddTitle>버스 등록</S.BusAddTitle>
          <S.InputWrap>
            <DodamTextField
              id='busName'
              label='버스 이름'
              name='busName'
              type='text'
              value={busData.busName}
              onChange={handleBusData}
            />
            <DodamTextField
              id='description'
              label='버스 설명'
              name='description'
              type='text'
              value={busData.description}
              onChange={handleBusData}
            />
            <S.DateWrap>
              <h1>출발시간</h1>
              <div>
                <DodamDatePicker
                  itemKey='startAt'
                  value={busData.leaveAt}
                  onChange={(e) => handleLeaveDataDate(e)}
                  title='출발시간'
                  dateType='MonthDay'
                  coordX={350}
                  coordY={1500}
                  color='primaryNormal'
                  typography={['Headline', 'Regular']}
                />
                <input name='leaveTime' type='time' value={busData.leaveTime} onChange={handleBusData} />
              </div>
            </S.DateWrap>
            <S.DateWrap>
              <h1>소요 시간</h1>
              <input
                name='timeRequired'
                type='text'
                placeholder='MM:SS'
                value={busData.timeRequired}
                onChange={handleBusData}
              />
            </S.DateWrap>
            <DodamTextField
              id='peopleLimit'
              label='인원 제한'
              name='peopleLimit'
              type='text'
              value={busData.peopleLimit.toString()}
              onChange={handleBusData}
            />
          </S.InputWrap>
          <S.ButtonWrap>
            <DodamFilledButton
              size='Large'
              text='취소'
              textTheme='labelNormal'
              backgroundColorType='Assistive'
              onClick={close}
              width={100}
            />
            <DodamFilledButton
              size='Large'
              text='버스 추가'
              textTheme='staticWhite'
              backgroundColorType='Primary'
              onClick={submitRegistBus}
              width={120}
            />
          </S.ButtonWrap>
        </S.BusAddWrap>
      )}
    </>
  )
}

export default BusAdd
