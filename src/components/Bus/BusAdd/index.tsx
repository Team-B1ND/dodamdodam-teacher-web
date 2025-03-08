import React, { Dispatch, SetStateAction } from 'react'
import { useRegistBus } from 'hooks/Bus/useRegistBus'
import BusRegisterTemplate from '../BusRegisterTemplate'

interface BusAddProps {
  setSection: Dispatch<SetStateAction<string>>
}

const BusAdd = ({ setSection }: BusAddProps) => {
  const { submitRegistBus } = useRegistBus()

  return (
    <BusRegisterTemplate
      title='버스 등록'
      setSection={setSection}
      onCreateBus={submitRegistBus}
    />
  )
}

export default BusAdd
