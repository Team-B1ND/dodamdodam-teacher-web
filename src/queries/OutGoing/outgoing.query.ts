import { UseQueryOptions, useMutation, useQuery } from "react-query";
import offbasepassRepositoryImpl from "repositories/OutGoing/outgoing.repositoryImpl";
import { OffBaseResponse } from "types/OffBasePass/offbasepass.type";
import { AxiosError } from "axios";
import { QUERY_KEYS } from "../queryKey";

export const useGetOutGoingQuery = (
  date: string,
  options?: UseQueryOptions<
    OffBaseResponse,
    AxiosError,
    OffBaseResponse,
    string[]
  >
) =>
  useQuery(
    QUERY_KEYS.outgoing.getOutGOing(date),
    () => offbasepassRepositoryImpl.getOutGoing(date),
    {
      enabled: !!date,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  );

export const usePatchApproval = () => {
  const mutation = useMutation((id: number) =>
    offbasepassRepositoryImpl.patchApproval(id)
  );
  return mutation;
};

export const usePatchApprovalCancel = () => {
  const mutation = useMutation((id: number) =>
    offbasepassRepositoryImpl.patchApprovalCancel(id)
  );
  return mutation;
};

export const usePatchCancel = () => {
  const mutation = useMutation((id: number) =>
    offbasepassRepositoryImpl.patchCancel(id)
  );
  return mutation;
};
