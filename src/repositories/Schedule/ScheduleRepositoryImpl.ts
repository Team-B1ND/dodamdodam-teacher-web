import { dodamTestAxios, dodamV6Axios } from "libs/Axios/customAxios";
import {
  GetScheduleByPeriodParam,
  GetSchedulesParam,
  ScheduleParam,
  ScheduleRepository,
} from "./ScheduleRepository";
import { ScheduleResponse } from "types/Schedule/types";

class ScheduleRepositoryImpl implements ScheduleRepository {
  public async createSchedule(param: ScheduleParam): Promise<Response> {
    const { data } = await dodamTestAxios.post("/schedule", param);
    return data;
  }

  public async getSchedulesByKeyword(
    keyword: string
  ): Promise<ScheduleResponse> {
    const { data } = await dodamTestAxios.get(
      `/schedule/search?keyword=${keyword}`
    );
    return data;
  }

  public async getScheduleByPeriod({
    endDate,
    startDate,
  }: GetScheduleByPeriodParam): Promise<ScheduleResponse> {
    const { data } = await dodamTestAxios.get(
      `/schedule/search?startDate=${startDate}&endDate=${endDate}`
    );
    return data;
  }

  public async getSchedules({
    page,
    limit,
  }: GetSchedulesParam): Promise<ScheduleResponse> {
    const { data } = await dodamTestAxios.get(
      `/schedule?limit=${limit}&page=${page}`
    );
    return data;
  }
}
export default new ScheduleRepositoryImpl();
