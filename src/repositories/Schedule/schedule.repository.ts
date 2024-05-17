import { ScheduleResponse } from "types/Schedule/schedule.type";
import { Response } from "types/util/response.type";

export interface ScheduleRepository {
  createSchedule(param: ScheduleParam): Promise<Response>;
  getScheduleByPeriod(
    param: GetScheduleByPeriodParam
  ): Promise<ScheduleResponse>;
  getSchedulesByKeyword(keyword: string): Promise<ScheduleResponse>;
  getSchedules({ page }: GetSchedulesParam): Promise<ScheduleResponse>;
  deleteSchedulesById(id: number): Promise<Response>;
}

export interface ScheduleParam {
  name: string;
  place: string;
  startDate: string;
  endDate: string;
  grades: string[];
}

export interface GetScheduleByPeriodParam {
  startDate: string;
  endDate: string;
}

export interface GetSchedulesParam {
  page: number;
}
