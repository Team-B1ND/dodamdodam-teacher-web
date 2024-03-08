import { BusDateAndListResponse } from "types/Bus/bus.type";

export interface BusRepository {
  getAllBusList(page: number): Promise<BusDateAndListResponse>;
  getBusDate(date: BusDateParam): Promise<BusDateAndListResponse>;
  createBus(param: BusUpdateParam): Promise<void>;
  modifyBus(param: BusUpdateParam): Promise<void>;
  deleteBus(id: number): Promise<void>;
}

export interface BusDateParam {
  year: number;
  month: number;
  day: number;
}

export interface BusUpdateParam {
  // 추가된 버스 수정할 때 busId 사용함!!
  busId?: number;

  busName: string;
  description: string;
  leaveTime: string;
  peopleLimit: number;
  timeRequired: string;
}
