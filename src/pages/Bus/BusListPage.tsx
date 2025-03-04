import BusSeatInfo from 'components/Bus/BusSeatInfo'
import BusList from 'components/Bus/BusList'
import styled from 'styled-components'
import BusInfo from 'components/Bus/BusInfo'
import { ReactNode, useState } from 'react'
import { useGetAllBusListQuery } from 'queries/Bus/bus.query'


const BusListPage = () => {
  const [section, setSection] = useState<string>('main')

  const BusComponents: Record<string, ReactNode> = {
    main: (
      <BusList
        setSection={setSection}
      />
    ),
    info: <BusInfo setSection={setSection} />,
  }
  return (
    <BusContainer>
      {BusComponents[section] || <BusList setSection={setSection} />}
      <BusSeatInfo />
    </BusContainer>
  )
}

export default BusListPage

const BusContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  padding: 1rem 2.5rem;
  background-color: ${({ theme }) => theme.backgroundAlternative};

  justify-content: space-between;
`
