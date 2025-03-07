import { BusDateAndListResponse } from "types/Bus/bus.type";

export interface BusRepository {
  getAllBusList(page: number): Promise<BusDateAndListResponse>;
  getBusDate(date: BusDateParam): Promise<BusDateAndListResponse>;
  createBus(param: BusUpdateParam): Promise<void>;
  createBusPreset(param: BusUpdateParam): Promise<void>;
  modifyBus({ busId, param }: BusModifyParam): Promise<void>;
  deleteBus(id: number): Promise<void>;
}

export interface BusDateParam {
  year: number;
  month: number;
  day: number;
}

export interface BusUpdateParam {
  busName: string;
  description: string;
  leaveTime: string;
  peopleLimit: number;
  timeRequired: string;
}

export interface BusModifyParam {
  busId: number;
  param: BusUpdateParam;
}
