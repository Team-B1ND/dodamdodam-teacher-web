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

export interface BusInfoType {
  idx: number;
  busName: string;
  description: string;
  peopleLimit: number;
  leaveTime: string;
  timeRequired: string;
  busMemberlength: number;
  busMember: BusMemberType[];
}
