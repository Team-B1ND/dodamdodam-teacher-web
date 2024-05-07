import { UseQueryOptions, useMutation, useQuery } from "react-query";
import offbaseleaveRepositroy from "repositories/OffBaseLeave/offbaseleave.repositroy";
import { OffBaseResponse } from "types/OffBasePass/offbasepass.type";
import { AxiosError } from "axios";
import { QUERY_KEYS } from "queries/queryKey";

export const useGetOffBaseLeaveQuery = (
  date: string,
  options?: UseQueryOptions<
    OffBaseResponse,
    AxiosError,
    OffBaseResponse,
    string[]
  >
) =>
  useQuery(
    QUERY_KEYS.offbaseleave.getOffBaseLeave(date),
    () => offbaseleaveRepositroy.getOffBaseLeave(date),
    {
      enabled: !!date,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  );

export const useGetTodayLeaveQuery = (
  options?: UseQueryOptions<
    OffBaseResponse,
    AxiosError,
    OffBaseResponse,
    string
  >
) =>
  useQuery(
    QUERY_KEYS.offbaseleave.getOffBaseTodayLeave,
    () => offbaseleaveRepositroy.getTodayLeave(),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  );

export const usePatchLeaveApproval = () => {
  const mutation = useMutation((id: number) =>
    offbaseleaveRepositroy.patchLeaveApproval(id)
  );
  return mutation;
};

export const usePatchLeaveCancel = () => {
  const mutation = useMutation((id: number) =>
    offbaseleaveRepositroy.patchLeaveCancel(id)
  );
  return mutation;
};

export const usePatchLeaveApprovalCancel = () => {
  const mutation = useMutation((id: number) =>
    offbaseleaveRepositroy.patchLeaveApprovalCancel(id)
  );
  return mutation;
};
