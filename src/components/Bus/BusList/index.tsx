import React, { Dispatch, SetStateAction, Suspense } from 'react'
import BusListTemplate from '../BusListTemplate'
import { useGetBusListByPeriodQuery } from 'queries/Bus/bus.query'
import { BusListByPeriod, BusListMember } from 'types/Bus/bus.type'
import { DodamErrorBoundary } from '@b1nd/dds-web'
import SkeletonComponent from 'components/common/Skeleton'

interface BusListProps {
  setSection: Dispatch<SetStateAction<string>>
  timeId: number
  setBusId: Dispatch<SetStateAction<number>>
  setBusMember: Dispatch<SetStateAction<BusListMember[]>>
  setBusData: Dispatch<SetStateAction<BusListByPeriod>>
}

const BusList = ({
  setSection,
  timeId,
  setBusId,
  setBusData,
}: BusListProps) => {
  const { data, isLoading } = useGetBusListByPeriodQuery(timeId)
  return (
    <BusListTemplate
      title='버스 목록'
      setSection={setSection}
      busPeriodListData={data!}
      setBusId={setBusId}
      setBusData={setBusData}
      isLoading={isLoading}
    />
  )
}

export default BusList
