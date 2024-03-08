import { Response } from "../util/response.type";

export interface BusDateAndListResponse extends Response {
  data: {
    bus: {
      applyCount: number;
      busMember: BusMemberType[];
      busName: string;
      description: string;
      id: number;
      leaveTime: string;
      peopleLimit: number;
      timeRequired: string;
    }[];
    date: string;
  };
}

export interface BusMemberType {
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
  id: number;
  busName: string;
  description: string;
  peopleLimit: number;
  leaveTime: string;
  timeRequired: string;
}
