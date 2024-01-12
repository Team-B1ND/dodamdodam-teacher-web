import { Response } from "../util/response.type";

export interface BusResponse extends Response {
  data: BusDataType;
}

export interface BusListResponse extends Response {
  data: BusDataType[];
  nextPage: number;
}

export interface BusDataType {
  busList: BusListType[];
}

export interface BusListType {
  date: string;
  bus: BusInfoType[];
}

export interface BusMemberType {
  idx: number;
  busIdx: number;
  studentIdx: number;
  memberId: string;
  name: string;
  email: string;
  phone: string;
}

export interface BusPassengerType {
  busName: string;
  busMember: BusMemberType[];
}

export interface BusBasicInfoType {
  idx: number;
  busName: string;
  description: string;
  peopleLimit: number;
  leaveTime: string;
  timeRequired: string;
}

export interface BusInfoType extends BusBasicInfoType {
  busMemberlength: number;
  busMember: BusMemberType[];
}
