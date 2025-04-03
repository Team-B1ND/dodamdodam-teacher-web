import {
  BusDateAndList,
  BusDateAndListResponse,
  BusListByPeriodResponse,
  BusPeriodResponse,
  BusPreset,
  BusPresetResponse,
  BusSeatResponse,
  StudentByBusResponse,
} from 'types/Bus/bus.type'

export interface BusRepository {
  getAllBusList(): Promise<BusDateAndListResponse>
  getBusDate(date: BusDateParam): Promise<BusDateAndListResponse>
  getBusPeriod(): Promise<BusPeriodResponse>
  getBusPreset(): Promise<BusPresetResponse>
  getBusListByPeriod(timeId: number): Promise<BusListByPeriodResponse>
  getBusSeats(id: number): Promise<BusSeatResponse>
  getStudentByBusId(id: number): Promise<StudentByBusResponse>
  getPresetById(id: number): Promise<BusPreset>
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
  leaveAt: string
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
