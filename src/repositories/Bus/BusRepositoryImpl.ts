import { dodamTeacherAxios, dodamV6Axios } from "../../libs/Axios/customAxios";
import {
  BusResponse,
  BusListResponse,
  BusDateResponse,
} from "../../types/Bus/Bus.type";
import { BusDateParam, BusRepository, BusUpdateParam } from "./BusRepository";

class BusRepositoryImpl implements BusRepository {
  public async getRegisteredBus(): Promise<BusResponse> {
    const { data } = await dodamTeacherAxios.get("/bus");
    return data;
  }

  public async getAllBusList(page: number): Promise<BusListResponse> {
    const { data } = await dodamV6Axios.get(`/bus/list?page=${page}&limit=8`);
    return data;
  }

  public async getBusDate(param: BusDateParam): Promise<BusDateResponse> {
    const { year, month, day } = param;
    const { data } = await dodamV6Axios.get(
      `/bus/date?year=${year}&month=${month}&day=${day}`
    );
    return data;
  }

  public async createBus(param: BusUpdateParam): Promise<void> {
    await dodamTeacherAxios.post("/bus", param);
  }

  public async modifyBus(param: BusUpdateParam): Promise<void> {
    await dodamTeacherAxios.put("/bus", param);
  }

  public async deleteBus(id: number): Promise<void> {
    await dodamTeacherAxios.delete(`/bus/${id}`);
  }
}

export default new BusRepositoryImpl();
