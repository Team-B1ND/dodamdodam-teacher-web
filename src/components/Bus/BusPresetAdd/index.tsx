import React, { Dispatch, SetStateAction } from 'react'
import BusRegisterTemplate from '../BusRegisterTemplate'
import { useRegistBus } from 'hooks/Bus/useRegistBus'

interface BusPresetAddProps {
  setSection: Dispatch<SetStateAction<string>>
}

const BusPresetAdd = ({ setSection }: BusPresetAddProps) => {
  const { createBusPreset } = useRegistBus()
  return (
    <BusRegisterTemplate
      title='버스 프리셋 등록'
      setSection={setSection}
      onCreateBus={createBusPreset}
    />
  )
}

export default BusPresetAdd
