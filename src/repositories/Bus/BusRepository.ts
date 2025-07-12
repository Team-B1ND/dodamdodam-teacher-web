import { BusDateAndListResponse, BusDetailResponse } from "types/Bus/bus.type";

export interface BusRepository {
  getAllBusList(): Promise<BusDateAndListResponse>;
  getDetailBus(id: number): Promise<BusDetailResponse>;
  createBus(name: string): Promise<void>;
  modifyBus({ busId, name }: BusUpdateParam): Promise<void>;
  deleteBus(id: number): Promise<void>;
  createBusBoard({studentId, busId} : BusStudentParam): Promise<void>;
}


export interface BusUpdateParam {
  busId: number;
  name: string;
}

export interface BusStudentParam {
  studentId : number[];
  busId : number;
}
