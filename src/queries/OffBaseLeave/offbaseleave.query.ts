import { UseQueryOptions, useMutation, useQuery } from "react-query";
import offbaseleaveRepositroy from "../../repositories/OffBaseLeave/offbaseleave.repositroy";
import { OffBaseResponse } from "../../types/OffBasePass/offbasepass.type";
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

export const usePatchLeaveApproval = () => {
  const mutation = useMutation((outId: number) =>
    offbaseleaveRepositroy.patchLeaveApproval([outId])
  );
  return mutation;
};

export const usePatchLeaveCancel = () => {
  const mutation = useMutation((outId: number) =>
    offbaseleaveRepositroy.patchLeaveCancel([outId])
  );
  return mutation;
};

export const usePatchLeaveApprovalCancel = () => {
  const mutation = useMutation((outId: number) =>
    offbaseleaveRepositroy.patchLeaveApprovalCancel([outId])
  );
  return mutation;
};
