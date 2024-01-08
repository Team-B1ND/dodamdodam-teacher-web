import { BusListResponse, BusResponse } from "../../types/Bus/bus.type";

export interface BusRepository {
  getRegisteredBus(): Promise<BusResponse>;
  getAllBusList({ page }: { page: number }): Promise<BusListResponse>;
  getBusDate(date: BusDateParam): Promise<BusResponse>;
  createBus(param: BusUpdateParam): Promise<void>;
  patchBus(param: BusUpdateParam): Promise<void>;
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
