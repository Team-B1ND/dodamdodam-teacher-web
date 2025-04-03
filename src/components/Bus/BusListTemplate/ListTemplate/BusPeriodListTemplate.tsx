import React, { Dispatch, SetStateAction } from 'react'
import {
  BusListByPeriod,
  BusListByPeriodResponse,
  BusListMember,
} from 'types/Bus/bus.type'
import { BusCell, IconWrap } from '../style'
import { ChevronRight } from '@b1nd/dds-web'
import { useDeleteBus } from 'hooks/Bus/useDeleteBus'

interface BusPeriodListTemplateProps {
  busPeriodListData: BusListByPeriodResponse
  setBusId: Dispatch<SetStateAction<number>>
  setBusMember?: Dispatch<SetStateAction<BusListMember[]>>
  setBusData: Dispatch<SetStateAction<BusListByPeriod>>
  setSection: Dispatch<SetStateAction<string>>
}

const BusPeriodListTemplate = ({
  busPeriodListData,
  setBusData,
  setBusId,
  setBusMember,
  setSection,
}: BusPeriodListTemplateProps) => {
  
  return (
    <>
      {busPeriodListData.data.length > 0 ? (
        busPeriodListData.data.map((bus) => (
          <BusCell key={bus.bus.id}>
            <span>{bus.bus.busName}</span>
            <IconWrap
              onClick={() => {
                setBusData(bus)
                setBusMember?.(bus.members)
                setBusId(bus.bus.id)
                setSection('busInfo')
              }}
            >
              <ChevronRight color='labelAssistive' size={16} />
            </IconWrap>
          </BusCell>
        ))
      ) : (
        <BusCell>해당 기간에는 버스가 존재하지 않습니다.</BusCell>
      )}
    </>
  )
}

export default BusPeriodListTemplate
