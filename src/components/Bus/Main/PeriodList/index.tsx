import React, { Dispatch, SetStateAction } from 'react'
import * as S from '../style'
import { BusPeriodResponse } from 'types/Bus/bus.type'
import dateTransform from 'utils/Transform/dateTransform'
import { ChevronRight } from '@b1nd/dds-web'

interface BusPeriodListProps {
  data: BusPeriodResponse
  setSection: Dispatch<SetStateAction<string>>
}

const BusPeriodList = ({ data, setSection }: BusPeriodListProps) => {
  return (
    <S.ListWrap>
      {data?.data.map((period) => (
        <S.BusPeriodCell key={period.busTimeId}>
          <span>
            {dateTransform.startAtToEndAt(period.startAt, period.endAt)}
          </span>
          <S.IconWrap onClick={() => setSection('bus-list')}>
            <ChevronRight color='labelAlternative' size={20} />
          </S.IconWrap>
        </S.BusPeriodCell>
      ))}
    </S.ListWrap>
  )
}

export default BusPeriodList
