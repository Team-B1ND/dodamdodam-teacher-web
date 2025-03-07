import React, { Dispatch, SetStateAction } from 'react'
import * as S from './style'
import {
  DodamDatePicker,
  DodamFilledButton,
  DodamTextField,
} from '@b1nd/dds-web'
import { useRegistBus } from 'hooks/Bus/useRegistBus'

interface BusAddProps {
  setSection: Dispatch<SetStateAction<string>>
}

const BusAdd = ({ setSection }: BusAddProps) => {
  const {
    busData,
    handleBusData,
    handleLeaveDataDate,
    submitRegistBus,
    createBusPreset,
  } = useRegistBus()

  return (
    <S.BusAddContainer>
      <S.BusAddTitleWrap>
        <h1>버스 등록</h1>
      </S.BusAddTitleWrap>
      <S.BusAddForm>
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
          name='busDescription'
          type='text'
          value={busData.description}
          onChange={handleBusData}
        />
        <S.BusDateWrap>
          <p>출발 시간</p>
          <DodamDatePicker
            itemKey='leaveTimeDatePicker'
            onChange={(e) => handleLeaveDataDate(e)}
            value={busData.leaveTime}
            title='출발 시간'
          />
        </S.BusDateWrap>
        <S.BusDateWrap>
          <p>소요 시간</p>
          <input type='time' />
        </S.BusDateWrap>
        <DodamTextField
          id='peopleLimit'
          label='인원 제한'
          type='text'
          name='peopleLimit'
          value={busData.peopleLimit.toString()}
          onChange={handleBusData}
        />
      </S.BusAddForm>
      <S.BusButtonWrap>
        <DodamFilledButton
          size='Large'
          text='프리셋'
          textTheme='staticBlack'
          typography={['Body1', 'Bold']}
          backgroundColorType='Assistive'
          width={100}
          onClick={createBusPreset}
        />
        <DodamFilledButton
          size='Large'
          text='등록'
          textTheme='staticWhite'
          typography={['Body1', 'Bold']}
          backgroundColorType='Primary'
          width={100}
          onClick={submitRegistBus}
        />
      </S.BusButtonWrap>
    </S.BusAddContainer>
  )
}

export default BusAdd
