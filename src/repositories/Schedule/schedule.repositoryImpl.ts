import { dodamAxios } from "libs/Axios/customAxios";
import {
  GetScheduleByPeriodParam,
  GetSchedulesParam,
  ScheduleParam,
  ScheduleRepository,
} from "./schedule.repository";
import { ScheduleResponse } from "types/Schedule/schedule.type";
import { Response } from "types/util/response.type";

class ScheduleRepositoryImpl implements ScheduleRepository {
  public async createSchedule(param: ScheduleParam): Promise<Response> {
    const { data } = await dodamAxios.post("/schedule", param);
    return data;
  }

  public async getSchedulesByKeyword(
    keyword: string
  ): Promise<ScheduleResponse> {
    const { data } = await dodamAxios.get(
      `/schedule/search?keyword=${keyword}`
    );
    return data;
  }

  public async getScheduleByPeriod({
    endDate,
    startDate,
  }: GetScheduleByPeriodParam): Promise<ScheduleResponse> {
    const { data } = await dodamAxios.get(
      `/schedule/search?startDate=${startDate}&endDate=${endDate}`
    );
    return data;
  }

  public async getSchedules({
    page,
  }: GetSchedulesParam): Promise<ScheduleResponse> {
    const { data } = await dodamAxios.get(`/schedule?limit=${10}&page=${page}`);
    return data;
  }
  public async deleteSchedulesById(id: number): Promise<Response> {
    const { data } = await dodamAxios.delete(`/schedule/${id}`);
    return data;
  }
}

const scheduleRepositoryImpl = new ScheduleRepositoryImpl();
export default scheduleRepositoryImpl;
