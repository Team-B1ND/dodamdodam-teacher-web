import { atom } from 'recoil'
import {
  BusBasicInfoType,
  BusDateAndListResponse,
  BusPassengerType,
} from 'types/Bus/bus.type'
import { recoilPersist } from 'recoil-persist'
import convertDateTime from 'utils/Time/ConvertDateTime'

const { persistAtom } = recoilPersist()

export const BusPassengerDataAtom = atom<BusPassengerType | null>({
  key: 'busPassengerDataAtom',
  default: null,
})

export const ExistingBusDataAtom = atom<BusBasicInfoType | null>({
  key: 'existingBusDataAtom',
  default: null,
})

export const BusListPageAtom = atom<number>({
  key: 'busListPageAtom',
  default: 1,
  effects_UNSTABLE: [persistAtom],
})

export const SelectBusDateAtom = atom<string>({
  key: 'selectBusDateAtom',
  default: convertDateTime.parseDesiredDateTime(new Date(), 'YYYY-MM-DD'),
})

export const SelectBusDataAtom = atom<{
  bus: {
    id: number
    busName: string
    description: string
    peopleLimit: number
    applyCount: number
    leaveTime: Date
    requiredTime: string
  }
}>({
  key: 'selectBusDataAtom',
  default: {
    bus: {
      id: 0,
      busName: '',
      description: '',
      peopleLimit: 0,
      applyCount: 0,
      leaveTime: new Date(),
      requiredTime: '',
    },
  },
})
