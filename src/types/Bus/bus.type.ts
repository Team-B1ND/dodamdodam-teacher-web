import { Student } from 'types/Member/member.type'
import { Response } from 'types/util/response.type'

export interface BusDateAndList {
  id: number
  busName: string
  description: string
  peopleLimit: number
  applyCount: number
  leaveAt: Date
  leaveTime: Date
  requiredTime: string
}

export interface BusDateAndListResponse extends Response {
  data: BusDateAndList[]
}

export type BusListByPeriodStatusType = 'ACTIVATE' | 'DEACTIVATE'

export interface BusListByPeriodResponse extends Response {
  data: {
    bus: {
      id: number
      busName: string
      description: string
      peopleLimit: number
      status: BusListByPeriodStatusType
      applyCount: number
      leaveAt: string
      leaveTime: string
      timeRequired: string
    }
    members: Student[]
  }[]
}

export interface BusPeriodResponse extends Response {
  data: {
    busTimeId: number
    startAt: string
    endAt: string
  }[]
}

export interface BusPresetResponse extends Response {
  data: {
    id: number
    name: string
    description: string
    peopleLimit: number
    leaveTime: string
    timeRequired: string
  }[]
}

export interface BusMemberType {
  memberId: string
  name: string
  email: string
  phone: string
}

export interface BusPassengerType {
  busName: string
  busMember: BusMemberType[]
}

export interface BusBasicInfoType {
  id: number
  busName: string
  description: string
  peopleLimit: number
  leaveTime: string
  timeRequired: string
}

export interface BusCreateType {
  id: number
  busName: string
  description: string
  peopleLimit: number
  leaveTime: string
  leaveAt: string
  timeRequired: string
}
