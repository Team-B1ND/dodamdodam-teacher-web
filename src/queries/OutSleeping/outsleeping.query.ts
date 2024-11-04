import { UseQueryOptions, useMutation, useQuery } from "react-query";
import offbaseleaveRepositroy from "repositories/OutSleeping/outsleeping.repositoryImpl";
import { OutResponse } from "types/Out/out.type";
import { AxiosError } from "axios";
import { QUERY_KEYS } from "queries/queryKey";

export const useGetOutSleepingQuery = (
  date: string,
  options?: UseQueryOptions<OutResponse, AxiosError, OutResponse, string[]>,
) =>
  useQuery(QUERY_KEYS.outsleeping.getOutSleeping(date), () => offbaseleaveRepositroy.getOutSleeping(date), {
    enabled: !!date,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    ...options,
  });

export const useGetTodayOutSleepingQuery = (
  options?: UseQueryOptions<OutResponse, AxiosError, OutResponse, string>,
) =>
  useQuery(QUERY_KEYS.outsleeping.getTodayOutSleeping, () => offbaseleaveRepositroy.getTodayOutSleeping(), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    ...options,
  });

export const usePatchSleepingApproval = () => {
  const mutation = useMutation((id: number) => offbaseleaveRepositroy.patchSleepingApproval(id));
  return mutation;
};

export const usePatchSleepingCancel = () => {
  const mutation = useMutation((id: number) => offbaseleaveRepositroy.patchSleepingCancel(id));
  return mutation;
};

export const usePatchSleepingApprovalCancel = () => {
  const mutation = useMutation((id: number) => offbaseleaveRepositroy.patchSleepingApprovalCancel(id));
  return mutation;
};
