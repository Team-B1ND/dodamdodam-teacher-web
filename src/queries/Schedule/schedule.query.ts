import { AxiosError } from "axios";
import { QUERY_KEYS } from "queries/queryKey";
import {
  UseInfiniteQueryOptions,
  UseQueryOptions,
  useInfiniteQuery,
  useMutation,
  useQuery,
} from "react-query";
import { GetScheduleByPeriodParam } from "repositories/Schedule/schedule.repository";
import ScheduleRepositoryImpl from "repositories/Schedule/schedule.repositoryImpl";
import { ScheduleResponse } from "types/Schedule/schedule.type";

export const useGetSchedulesQuery = (
  options?: UseInfiniteQueryOptions<
    ScheduleResponse,
    AxiosError,
    ScheduleResponse,
    ScheduleResponse,
    string[]
  >
) =>
  useInfiniteQuery(
    QUERY_KEYS.schedule.getSchedules,
    ({ pageParam = 1 }) =>
      ScheduleRepositoryImpl.getSchedules({ page: pageParam }),
    {
      ...options,
      cacheTime: 1000 * 60,
      staleTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetSchedulesByPeriodQuery = (
  { endAt, startAt }: GetScheduleByPeriodParam,
  options?: UseQueryOptions<
    ScheduleResponse,
    AxiosError,
    ScheduleResponse,
    string[]
  >
) =>
  useQuery(
    QUERY_KEYS.schedule.getSchedulesByPeriod(endAt, startAt),
    () => ScheduleRepositoryImpl.getScheduleByPeriod({ endAt, startAt }),
    {
      ...options,
    }
  );

export const useCreateScheduleMutation = () => {
  const mutation = useMutation(ScheduleRepositoryImpl.createSchedule);
  return mutation;
};

export const useDeleteSchedulesMutation = () => {
  const mutation = useMutation(ScheduleRepositoryImpl.deleteSchedulesById);
  return mutation;
};
