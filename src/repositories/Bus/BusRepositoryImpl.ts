import {
  dodamTeacherAxios,
  dodamTestAxios,
  dodamV6Axios,
} from "libs/Axios/customAxios";
import { BusDateAndListResponse } from "types/Bus/bus.type";
import { BusDateParam, BusRepository, BusUpdateParam } from "./BusRepository";

class BusRepositoryImpl implements BusRepository {
  public async getAllBusList(page: number): Promise<BusDateAndListResponse> {
    const { data } = await dodamTestAxios.get(`/bus/list?page=${page}&limit=8`);
    return data;
  }

  public async getBusDate(
    param: BusDateParam
  ): Promise<BusDateAndListResponse> {
    const { year, month, day } = param;
    const { data } = await dodamTestAxios.get(
      `/bus/date?year=${year}&month=${month}&day=${day}`
    );
    return data;
  }

  public async createBus(param: BusUpdateParam): Promise<void> {
    await dodamTestAxios.post("/bus", param);
  }

  public async modifyBus(param: BusUpdateParam): Promise<void> {
    await dodamTestAxios.patch("/bus", param);
  }

  public async deleteBus(id: number): Promise<void> {
    await dodamTestAxios.delete(`/bus/${id}`);
  }
}

export default new BusRepositoryImpl();
