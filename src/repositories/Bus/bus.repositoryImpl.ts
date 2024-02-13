import { dodamTeacherAxios, dodamV6Axios } from "../../libs/Axios/customAxios";
import { BusResponse, BusListResponse } from "../../types/Bus/bus.type";
import { BusDateParam, BusRepository, BusUpdateParam } from "./bus.repository";

class BusRepositoryImpl implements BusRepository {
  public async getRegisteredBus(): Promise<BusResponse> {
    const { data } = await dodamTeacherAxios.get("/bus");
    return data;
  }

  public async getAllBusList({
    page,
  }: {
    page: number;
  }): Promise<BusListResponse> {
    const { data } = await dodamV6Axios.get(`/bus/list?page=${page}&limit=8`);
    return { ...data, nextPage: page + 1 };
  }

  public async getBusDate(param: BusDateParam): Promise<BusResponse> {
    const { year, month, day } = param;
    const { data } = await dodamV6Axios.get(
      `/bus/date?year=${year}&month=${month}&day=${day}`
    );
    return data;
  }

  public async createBus(param: BusUpdateParam): Promise<void> {
    await dodamV6Axios.post("/bus", param);
  }

  public async patchBus(param: BusUpdateParam): Promise<void> {
    await dodamV6Axios.patch("/bus", param);
  }

  public async deleteBus(id: number): Promise<void> {
    await dodamV6Axios.delete(`/bus/${id}`);
  }
}

export default new BusRepositoryImpl();