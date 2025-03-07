import { Response } from 'types/util/response.type'

export interface BusDateAndListResponse extends Response {
  data: {
    id: number;
    busName: string;
    description: string;
    peopleLimit: number;
    applyCount: number;
    leaveTime: Date;
    requiredTime: string;
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