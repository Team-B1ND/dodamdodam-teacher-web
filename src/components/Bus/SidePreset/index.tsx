import React, { Dispatch, SetStateAction } from 'react'
import * as S from './style'
import { Plus, ChevronRight, SchoolBus } from '@b1nd/dds-web'
import { useGetBusPresetQuery } from 'queries/Bus/bus.query'

interface SidePresetProps {
  setSection: Dispatch<SetStateAction<string>>
  setPresetId: Dispatch<SetStateAction<number>>
}

const SidePreset = ({ setSection, setPresetId }: SidePresetProps) => {
  const { data } = useGetBusPresetQuery()

  return (
    <S.SidePresetContainer>
      <S.SidePresetTitleWrap>
        <h1>버스 등록 프리셋</h1>
        <S.IconWrap onClick={() => setSection('createPreset')}>
          <Plus color='labelAlternative' />
        </S.IconWrap>
      </S.SidePresetTitleWrap>

      <S.ListWrap>
        {data?.data.length ? (
          data?.data.map((preset) => (
            <S.BusCell
              key={preset.id}
              onClick={() => {
                setPresetId(preset.id)
                setSection('presetInfo')
              }}
            >
              <span>{preset.name}</span>
              <S.IconWrap>
                <ChevronRight color='labelAlternative' size={20} />
              </S.IconWrap>
            </S.BusCell>
          ))
        ) : (
          <S.NoneBusPrestWrap>
            <SchoolBus size={40} />
            <span>프리셋이 아직 없어요</span>
          </S.NoneBusPrestWrap>
        )}
      </S.ListWrap>
    </S.SidePresetContainer>
  )
}

export default SidePreset
