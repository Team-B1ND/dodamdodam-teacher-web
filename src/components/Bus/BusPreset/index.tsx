import React, { Dispatch, SetStateAction } from 'react'
import * as S from './style'
import { ChevronRight, Plus } from '@b1nd/dds-web'

interface BusPresetProps {
  setSection: Dispatch<SetStateAction<string>>
}

const BusPreset = ({ setSection }: BusPresetProps) => {
  return (
    <S.BusPresetContainer>
      <S.BussPresetTitleWrap>
        <h1>버스 등록 프리셋</h1>
        <S.IconWrap onClick={() => setSection('presetAdd')}>
          <Plus size={20} color='labelAlternative' />
        </S.IconWrap>
      </S.BussPresetTitleWrap>
      <S.BusPresetListContainer>
        <span>동대구역 1호</span>
        <S.IconWrap
          style={{ width: '20px', height: '20px' }}
          onClick={() => setSection('presetInfo')}
        >
          <ChevronRight size={12} color='labelAssistive' />
        </S.IconWrap>
      </S.BusPresetListContainer>
    </S.BusPresetContainer>
  )
}

export default BusPreset
