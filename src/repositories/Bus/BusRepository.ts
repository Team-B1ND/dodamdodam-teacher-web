import { BusListResponse, BusResponse } from "../../types/Bus/Bus.type";

export interface BusRepository {
  getRegisteredBus(): Promise<BusResponse>;
  getAllBusList({ page }: { page: number }): Promise<BusListResponse>;
  getBusDate(date: BusDateParam): Promise<BusResponse>;
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
  // 추가된 버스 수정할 때 busIdx 사용함!!
  busIdx?: number;

  busName: string;
  description: string;
  leaveTime: string;
  peopleLimit: number;
  timeRequired: string;
}
