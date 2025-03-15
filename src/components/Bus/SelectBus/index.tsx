import React, { Dispatch, SetStateAction, useState } from 'react'
import * as S from './style'
import { DodamFilledButton } from '@b1nd/dds-web'
import { BusDateAndListResponse } from 'types/Bus/bus.type'
import { CreateBusPeriodParam } from 'repositories/Bus/BusRepository'
import BusAdd from './BusAdd'
import BusListTemplate from '../BusListTemplate'

interface SelectBusProps {
  setSection: Dispatch<SetStateAction<string>>
  createBusPeriod: (param: CreateBusPeriodParam) => void
  startAt: string
  endAt: string
  data: BusDateAndListResponse
}

const SelectBus = ({
  setSection,
  startAt,
  endAt,
  data,
  createBusPeriod,
}: SelectBusProps) => {
  const [busIds, setBusIds] = useState<number[]>([])
  const [isAdd, setIsAdd] = useState(false)

  const handleBusIds = (id: number) => {
    if (busIds.includes(id)) {
      setBusIds((prev) => prev.filter((busId) => busId !== id))
    } else {
      setBusIds((prev) => [...prev, id])
    }
  }

  return (
    <BusListTemplate
      title='버스 등록'
      setSection={setSection}
      busListData={data}
      handleBusIds={handleBusIds}
      busIds={busIds}
      setIsAdd={setIsAdd}
      createBusPeriod={createBusPeriod}
      startAt={startAt}
      endAt={endAt}
      isAdd={isAdd}
    />
  )
}

export default SelectBus
