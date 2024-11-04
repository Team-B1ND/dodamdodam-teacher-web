import { UseQueryOptions, useMutation, useQuery } from "react-query";
import offbaseleaveRepositroy from "repositories/OffBaseLeave/offbaseleave.repositroy";
import { OffBaseResponse } from "types/OffBasePass/offbasepass.type";
import { AxiosError } from "axios";
import { QUERY_KEYS } from "queries/queryKey";

export const useGetOutSleepingQuery = (
  date: string,
  options?: UseQueryOptions<
    OffBaseResponse,
    AxiosError,
    OffBaseResponse,
    string[]
  >
) =>
  useQuery(
    QUERY_KEYS.outsleeping.getOutSleeping(date),
    () => offbaseleaveRepositroy.getOffBaseLeave(date),
    {
      enabled: !!date,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  );

export const useGetTodayOutSleepingQuery = (
  options?: UseQueryOptions<
    OffBaseResponse,
    AxiosError,
    OffBaseResponse,
    string
  >
) =>
  useQuery(
    QUERY_KEYS.outsleeping.getTodayOutSleeping,
    () => offbaseleaveRepositroy.getTodayLeave(),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  );

export const usePatchSleepingApproval = () => {
  const mutation = useMutation((id: number) =>
    offbaseleaveRepositroy.patchLeaveApproval(id)
  );
  return mutation;
};

export const usePatchSleepingCancel = () => {
  const mutation = useMutation((id: number) =>
    offbaseleaveRepositroy.patchLeaveCancel(id)
  );
  return mutation;
};

export const usePatchSleepingApprovalCancel = () => {
  const mutation = useMutation((id: number) =>
    offbaseleaveRepositroy.patchLeaveApprovalCancel(id)
  );
  return mutation;
};
