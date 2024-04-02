import { AxiosError } from "axios";
import { QUERY_KEYS } from "queries/queryKey";
import { UseQueryOptions, useMutation, useQuery } from "react-query";
import {
  GetScheduleByPeriodParam,
  GetSchedulesParam,
} from "repositories/Schedule/schedule.repository";
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

export const useCreateScheduleMutation = () => {
  const mutation = useMutation(ScheduleRepositoryImpl.createSchedule);
  return mutation;
};
