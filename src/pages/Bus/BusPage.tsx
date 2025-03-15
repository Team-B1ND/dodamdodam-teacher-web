import CreatePeriod from 'components/Bus/CreatePeriod'
import BusMain from 'components/Bus/Main'
import SelectBus from 'components/Bus/SelectBus'
import SidePreset from 'components/Bus/SidePreset'
import { useRegistBus } from 'hooks/Bus/useRegistBus'
import {
  useGetAllBusListQuery,
  useGetBusPeriodQuery,
} from 'queries/Bus/bus.query'
import React, { ReactNode, useState } from 'react'
import styled from 'styled-components'

const BusPage = () => {
  const [section, setSection] = useState('main')
  const { registerBusData, createBusPeriod } = useRegistBus({
    setSection,
  })
  const [periodData, setPeriodData] = useState<{
    startAt: string
    endAt: string
  }>({ startAt: registerBusData.startAt, endAt: registerBusData.endAt })

  const { data: busPeriod } = useGetBusPeriodQuery()
  const { data: busList } = useGetAllBusListQuery()
  

  // main -> createPeriod -> selectBus -> main
  // main -> periodInfo -> selectBus -> busInfo
  // main -> presetInfo
  // main, createPeriod, periodInfo, selectBus, presetInfo, busInfo
  const BusComponents: Record<string, ReactNode> = {
    main: <BusMain setSection={setSection} data={busPeriod!} />,
    createPeriod: (
      <CreatePeriod setPeriodData={setPeriodData} setSection={setSection} />
    ),
    selectBus: (
      <SelectBus
        setSection={setSection}
        createBusPeriod={createBusPeriod}
        startAt={periodData.startAt}
        endAt={periodData.endAt}
        data={busList!}
      />
    ),
  }

  return (
    <BusContainer>
      {BusComponents[section] || (
        <BusMain setSection={setSection} data={busPeriod!} />
      )}
      {section === 'main' && <SidePreset setSection={setSection} />}
      
    </BusContainer>
  )
}

export default BusPage

const BusContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 1rem 2.5rem;

  background-color: ${({ theme }) => theme.backgroundAlternative};

  display: flex;
  justify-content: space-between;
`
