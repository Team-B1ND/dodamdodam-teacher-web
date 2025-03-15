import {
  BusDateAndListResponse,
  BusPeriodResponse,
  BusPresetResponse,
} from 'types/Bus/bus.type'

export interface BusRepository {
  getAllBusList(): Promise<BusDateAndListResponse>
  getBusDate(date: BusDateParam): Promise<BusDateAndListResponse>
  getBusPeriod(): Promise<BusPeriodResponse>
  getBusPreset(): Promise<BusPresetResponse>
  createBusPeriod(param: CreateBusPeriodParam): Promise<void>
  createBus(param: BusUpdateParam): Promise<void>
  createBusPreset(param: BusUpdateParam): Promise<void>
  modifyBus({ busId, param }: BusModifyParam): Promise<void>
  deleteBus(id: number): Promise<void>
}

export interface BusDateParam {
  year: number
  month: number
  day: number
}

export interface BusUpdateParam {
  busName: string
  description: string
  leaveTime: string
  peopleLimit: number
  timeRequired: string
}

export interface BusModifyParam {
  busId: number
  param: BusUpdateParam
}

export interface CreateBusPeriodParam {
  startAt: string
  endAt: string
  busId: number[]
}
