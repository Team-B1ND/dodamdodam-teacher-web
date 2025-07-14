import { BusDateAndListResponse, BusDetailResponse } from "types/Bus/bus.type";
import {
  BusRepository,
  BusStudentParam,
  BusUpdateParam,
} from "./BusRepository";
import { dodamAxios } from "libs/Axios/customAxios";

class BusRepositoryImpl implements BusRepository {
  public async getAllBusList(): Promise<BusDateAndListResponse> {
    const { data } = await dodamAxios.get(`/bus`);
    return data;
  }

  public async getDetailBus(id: number): Promise<BusDetailResponse> {
    const { data } = await dodamAxios.get(`/bus/${id}`);
    return data.data;
  }

  public async createBus(name: string): Promise<void> {
    await dodamAxios.post("/bus", { name: name });
  }

  public async modifyBus({ busId, name }: BusUpdateParam): Promise<void> {
    await dodamAxios.put(`/bus/${busId}`, { name });
  }

  public async deleteBus(id: number): Promise<void> {
    await dodamAxios.delete(`/bus/${id}`);
  }
  public async createBusBoard({studentId, busId}: BusStudentParam): Promise<void> {
    await dodamAxios.post(`/bus/board`, {studentId, busId});
  }
}

const busRepositoryImpl = new BusRepositoryImpl();
export default busRepositoryImpl;
