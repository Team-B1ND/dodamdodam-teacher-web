import React, { Dispatch, SetStateAction, useCallback, useState } from 'react'
import * as S from './style'
import { DodamDatePicker, DodamFilledButton } from '@b1nd/dds-web'
import dayjs from 'dayjs'
import { useGetPresetByIdQuery } from 'queries/Bus/bus.query'
import dateTransform from 'utils/Transform/dateTransform'
import { useRegistBus } from 'hooks/Bus/useRegistBus'

interface PresetInfoProps {
  id: number
  setSection: Dispatch<SetStateAction<string>>
}

const PresetInfo = ({ id, setSection }: PresetInfoProps) => {
  const { data } = useGetPresetByIdQuery(id!)
  const { submitRegistBus } = useRegistBus({ setSection })
  const [leaveAt, setLeaveAt] = useState(dayjs().format('YYYY-MM-DD'))

  const handleLeaveAt = useCallback(
    (e: Date) => {
      setLeaveAt(dayjs(e).format('YYYY-MM-DD'))
    },
    [setLeaveAt]
  )

  return (
    <S.PresetInfoWrap>
      <S.PresetInfoTitle>버스 정보</S.PresetInfoTitle>
      <S.BusDescriptionWrap>
        <div>
          <h1>{data?.data.name}</h1>
          <span>{data?.data.description}</span>
        </div>
        <div>
          <span>출발 시간: {data?.data.leaveTime}</span>
          <span>소요 시간: {data?.data.timeRequired}</span>
          <span>인원 제한: {data?.data.peopleLimit}</span>
        </div>
      </S.BusDescriptionWrap>
      <S.PresetInfoTitle>버스 등록 프리셋 사용</S.PresetInfoTitle>
      <S.DateWrap>
        <p>출발 시간</p>
        <DodamDatePicker
          itemKey='leaveAt'
          value={leaveAt}
          onChange={handleLeaveAt}
          dateType='MonthDay'
          title='출발 시간'
          color='primaryNormal'
        />
      </S.DateWrap>
      <S.ButtonWrap>
        <DodamFilledButton
          text='취소'
          size='Large'
          textTheme='labelNeutral'
          backgroundColorType='Assistive'
          width={120}
        />
        <DodamFilledButton
          text='등록'
          size='Large'
          textTheme='staticWhite'
          backgroundColorType='Primary'
          width={120}
          onClick={() => {
            submitRegistBus({
              busName: data?.data.name!,
              description: data?.data.description!,
              peopleLimit: data?.data.peopleLimit!,
              leaveAt: leaveAt,
              leaveTime: data?.data.leaveTime!,
              timeRequired: data?.data.timeRequired!,
            })
            setSection('main')
          }}
        />
      </S.ButtonWrap>
    </S.PresetInfoWrap>
  )
}

export default PresetInfo
