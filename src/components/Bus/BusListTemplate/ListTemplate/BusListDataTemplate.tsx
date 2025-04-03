import React, { Dispatch, SetStateAction } from 'react'
import {
  BusDateAndListResponse,
  BusListByPeriodResponse,
} from 'types/Bus/bus.type'
import { BusCell } from '../style'
import { DodamFilledButton } from '@b1nd/dds-web'

interface BusListDataTemplateProps {
  busListData: BusDateAndListResponse
  handleBusIds: (id: number) => void
  setBusId: Dispatch<SetStateAction<number>>
}

const BusListDataTemplate = ({
  busListData,
  handleBusIds,
  setBusId,
}: BusListDataTemplateProps) => {
  return (
    <>
      {busListData?.data.length > 0 ? (
        busListData?.data.map((bus) => (
          <BusCell key={bus.id}>
            <span>{bus.busName}</span>
            <DodamFilledButton
              text='선택'
              size='Small'
              textTheme='staticWhite'
              backgroundColorType='Primary'
              typography={['Body2', 'Regular']}
              width={65}
              onClick={() => handleBusIds?.(bus.id)}
            />
          </BusCell>
        ))
      ) : (
        <BusCell>해당 기간에는 버스가 존재하지 않습니다.</BusCell>
      )}
    </>
  )
}

export default BusListDataTemplate
