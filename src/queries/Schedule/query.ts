import { AxiosError } from "axios";
import { QUERY_KEYS } from "queries/queryKey";
import { UseQueryOptions, useQuery } from "react-query";
import {
  GetScheduleByPeriodParam,
  GetSchedulesParam,
} from "repositories/Schedule/ScheduleRepository";
import ScheduleRepositoryImpl from "repositories/Schedule/ScheduleRepositoryImpl";
import { ScheduleResponse } from "types/Schedule/types";

export const useGetSchedulesQuery = ({ limit, page }: GetSchedulesParam) =>
  useQuery(QUERY_KEYS.schedule.getSchedules(page), () =>
    ScheduleRepositoryImpl.getSchedules({ limit, page })
  );

export const useGetSchedulesByPeriodQuery = (
  { endDate, startDate }: GetScheduleByPeriodParam,
  options?: UseQueryOptions<
    ScheduleResponse,
    AxiosError,
    ScheduleResponse,
    string[]
  >
) =>
  useQuery(
    QUERY_KEYS.schedule.getSchedulesByPeriod(endDate, startDate),
    () => ScheduleRepositoryImpl.getScheduleByPeriod({ endDate, startDate }),
    {
      ...options,
    }
  );
