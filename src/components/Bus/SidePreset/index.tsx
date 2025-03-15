import React, { Dispatch, SetStateAction } from 'react'
import * as S from './style'
import { Plus, ChevronRight, SchoolBus } from '@b1nd/dds-web'
import { useGetBusPresetQuery } from 'queries/Bus/bus.query'

interface SidePresetProps {
  setSection: Dispatch<SetStateAction<string>>
}

const SidePreset = ({ setSection }: SidePresetProps) => {
  const { data } = useGetBusPresetQuery()

  if (!data || data.data.length === 0) {
    return (
      <S.NoneBusPrestWrap>
        <SchoolBus size={40} />
        <span>프리셋이 아직 없어요</span>
      </S.NoneBusPrestWrap>
    )
  }

  return (
    <S.SidePresetContainer>
      <S.SidePresetTitleWrap>
        <h1>버스 등록 프리셋</h1>
        <S.IconWrap>
          <Plus color='labelAlternative' />
        </S.IconWrap>
      </S.SidePresetTitleWrap>

      <S.ListWrap>
        {data?.data.map((preset) => (
          <S.BusCell key={preset.id}>
            <span>{preset.name}</span>
            <S.IconWrap>
              <ChevronRight color='labelAlternative' size={20} />
            </S.IconWrap>
          </S.BusCell>
        ))}
      </S.ListWrap>
    </S.SidePresetContainer>
  )
}

export default SidePreset
