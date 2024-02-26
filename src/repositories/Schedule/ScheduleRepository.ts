import { Schedule, ScheduleResponse } from "types/Schedule/types";

export interface ScheduleRepository {
  createSchedule(param: ScheduleParam): Promise<Response>;
  getScheduleByPeriod(
    param: GetScheduleByPeriodParam
  ): Promise<ScheduleResponse>;
  getSchedulesByKeyword(keyword: string): Promise<ScheduleResponse>;
  getSchedules({ page, limit }: GetSchedulesParam): Promise<ScheduleResponse>;
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
  limit: number;
  page: number;
}
