import { AxiosError } from 'axios';
import { QUERY_KEYS } from 'queries/queryKey';
import { UseQueryOptions, useMutation, useQuery } from 'react-query';
import { GetScheduleByPeriodParam } from 'repositories/Schedule/schedule.repository';
import ScheduleRepositoryImpl from 'repositories/Schedule/schedule.repositoryImpl';
import { ScheduleResponse } from 'types/Schedule/schedule.type';

export const useGetSchedulesByPeriodQuery = (
  { endAt, startAt }: GetScheduleByPeriodParam,
  options?: UseQueryOptions<ScheduleResponse, AxiosError, ScheduleResponse, string[]>
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
