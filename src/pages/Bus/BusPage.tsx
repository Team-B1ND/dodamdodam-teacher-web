import BusInfo from 'components/Bus/BusInfo'
import BusList from 'components/Bus/BusList'
import CreatePeriod from 'components/Bus/CreatePeriod'
import CreateBusPreset from 'components/Bus/CreatePreset'
import BusMain from 'components/Bus/Main'
import PresetInfo from 'components/Bus/PresetInfo'
import SelectBus from 'components/Bus/SelectBus'
import SidePreset from 'components/Bus/SidePreset'
import { useRegistBus } from 'hooks/Bus/useRegistBus'
import {
  useGetAllBusListQuery,
  useGetBusPeriodQuery,
} from 'queries/Bus/bus.query'
import React, { ReactNode, useState } from 'react'
import styled from 'styled-components'
import { BusListByPeriod, BusListMember } from 'types/Bus/bus.type'
import { Member } from 'types/Member/member.type'

const BusPage = () => {
  const [section, setSection] = useState('main')
  const { registerBusData, createBusPeriod } = useRegistBus({
    setSection,
  })
  const [periodData, setPeriodData] = useState<{
    startAt: string
    endAt: string
  }>({ startAt: registerBusData.startAt, endAt: registerBusData.endAt })
  const [timeId, setTimeId] = useState(0)
  const [busId, setBusId] = useState(0)
  const [presetId, setPresetId] = useState(0)
  const [busMember, setBusMember] = useState<BusListMember[]>([])
  const [busData, setBusData] = useState<BusListByPeriod>({
    bus: {
      id: 0,
      busName: '',
      description: '',
      peopleLimit: 0,
      status: 'ACTIVATE',
      applyCount: 0,
      leaveAt: '',
      leaveTime: '',
      timeRequired: '',
    },
    members: [],
  })

  const { data: busPeriod } = useGetBusPeriodQuery()
  const { data: busList } = useGetAllBusListQuery()

  // main -> createPeriod -> selectBus -> main
  // main -> selectBus -> busInfo
  // main -> presetInfo
  // main, createPeriod, selectBus, presetInfo, busInfo
  const BusComponents: Record<string, ReactNode> = {
    main: (
      <BusMain
        setSection={setSection}
        data={busPeriod!}
        setTimeId={setTimeId}
      />
    ),
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
    busList: (
      <BusList
        setSection={setSection}
        timeId={timeId}
        setBusId={setBusId}
        setBusMember={setBusMember}
        setBusData={setBusData}
      />
    ),
    busInfo: (
      <BusInfo
        setSection={setSection}
        busId={busId}
        busMemberList={busMember}
        busData={busData}
      />
    ),
    createPreset: <CreateBusPreset setSection={setSection} />,
    presetInfo: <PresetInfo id={presetId} setSection={setSection} />,
  }

  return (
    <BusContainer>
      {BusComponents[section] || (
        <BusMain
          setSection={setSection}
          data={busPeriod!}
          setTimeId={setTimeId}
        />
      )}
      {section === 'main' || section === 'presetInfo' ? (
        <SidePreset setSection={setSection} setPresetId={setPresetId} />
      ) : (
        <></>
      )}
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
