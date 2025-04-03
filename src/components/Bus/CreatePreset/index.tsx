import React, { Dispatch, SetStateAction, useState } from 'react'
import * as S from './style'
import { DodamFilledButton, DodamTextField } from '@b1nd/dds-web'
import { TimePicker } from 'rsuite'
import { useRegistBus } from 'hooks/Bus/useRegistBus'

interface CreateBusPresetProps {
  setSection: Dispatch<SetStateAction<string>>
}

const CreateBusPreset = ({ setSection }: CreateBusPresetProps) => {
  const { busPreset, handleBusPresetData, createBusPreset } = useRegistBus({ setSection })
  return (
    <S.CreateBusPresetWrap>
      <S.CreateBusPresetTitle>버스 등록 프리셋 생성</S.CreateBusPresetTitle>
      <S.CreateBusPresetInputWrap>
        <DodamTextField
          id='busName'
          name='busName'
          label='버스 이름'
          value={busPreset.busName}
          onChange={handleBusPresetData}
          type='text'
        />
        <DodamTextField
          id='description'
          name='description'
          label='버스 설명'
          value={busPreset.description}
          onChange={handleBusPresetData}
          type='text'
        />
        <S.CreateBusPresetDateWrap>
          <h1>출발 시간</h1>
          <input
            type='time'
            id='leaveTime'
            name='leaveTime'
            value={busPreset.leaveTime}
            onChange={handleBusPresetData}
          />
        </S.CreateBusPresetDateWrap>
        <DodamTextField
          id='timeRequired'
          name='timeRequired'
          label='소요 시간'
          value={busPreset.timeRequired}
          onChange={handleBusPresetData}
          type='text'
        />
        <DodamTextField
          id='peopleLimit'
          name='peopleLimit'
          label='인원 제한'
          value={busPreset.peopleLimit.toString()}
          onChange={handleBusPresetData}
          type='text'
        />
      </S.CreateBusPresetInputWrap>
      <S.ButtonWrap>
        <DodamFilledButton
          text='뒤로가기'
          onClick={() => setSection('main')}
          size='Large'
          backgroundColorType='Assistive'
          width={120}
        />
        <DodamFilledButton
          text='생성'
          onClick={createBusPreset}
          size='Large'
          backgroundColorType='Primary'
          textTheme='staticWhite'
          width={120}
        />
      </S.ButtonWrap>
    </S.CreateBusPresetWrap>
  )
}

export default CreateBusPreset
