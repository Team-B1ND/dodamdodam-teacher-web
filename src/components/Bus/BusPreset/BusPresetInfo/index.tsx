import React, { Dispatch, SetStateAction } from 'react'
import * as S from './style'
import { DodamDatePicker, DodamFilledButton } from '@b1nd/dds-web'
import dayjs from 'dayjs'

interface BusPresetInfoProps {
  setSection: Dispatch<SetStateAction<string>>
}

const BusPresetInfo = ({ setSection }: BusPresetInfoProps) => {
  return (
    <S.BusPresetInfoContainer>
      <S.BusPresetInfoTitleWrap>
        <h1>버스 정보</h1>
      </S.BusPresetInfoTitleWrap>
      <S.BusPresetInfoWrap>
        <div>
          <h1>동대구역 1호</h1>
          <span>동대구역에 하차합니다.</span>
        </div>
        <div>
          <span>출발시간: 13:00</span>
          <span>소요시간: 01:00</span>
          <span>인원제한: 40</span>
        </div>
      </S.BusPresetInfoWrap>
      <S.BusPresetUseWrap>
        <h1>버스 등록 프리셋 사용</h1>
        <div>
          <h1>출발 시간</h1>
          <DodamDatePicker
            itemKey='leaveTimeDatePicker'
            onChange={() => {}}
            value={dayjs().format('YYYY-MM-DD')}
            title='출발 시간'
            typography={['Headline', 'Regular']}
            color='primaryNormal'
            iconSize={20}
          />
        </div>
      </S.BusPresetUseWrap>
      <S.BusPresetButtonWrap>
        <DodamFilledButton
          text='취소'
          onClick={() => setSection('main')}
          size='Large'
          backgroundColorType='Assistive'
          textTheme='labelNeutral'
          typography={['Body1', 'Bold']}
          width={100}
        />
        <DodamFilledButton
          text='사용'
          onClick={() => {}}
          size='Large'
          backgroundColorType='Primary'
          textTheme='staticWhite'
          typography={['Body1', 'Bold']}
          width={100}
        />
      </S.BusPresetButtonWrap>
    </S.BusPresetInfoContainer>
  )
}

export default BusPresetInfo
