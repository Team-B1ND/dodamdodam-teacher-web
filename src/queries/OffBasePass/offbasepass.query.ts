import { UseQueryOptions, useMutation, useQuery } from "react-query";
import offbasepassRepositoryImpl from "../../repositories/OffBasePass/offbasepass.repositoryImpl";
import { OffBaseResponse } from "../../types/OffBasePass/offbasepass.type";
import { AxiosError } from "axios";
import { QUERY_KEYS } from "../queryKey";

export const useGetOffBasePassQuery = (
  date: string,
  options?: UseQueryOptions<
    OffBaseResponse,
    AxiosError,
    OffBaseResponse,
    string | any
  >
) =>
  useQuery(
    QUERY_KEYS.offbasepass.getOffBasePass(date),
    () => offbasepassRepositoryImpl.getOffBasePass(date),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const usePatchApproval = () => {
  const mutation = useMutation((outId: number) =>
    offbasepassRepositoryImpl.patchApproval([outId])
  );
  return mutation;
};

export const usePatchApprovalCancel = () => {
  const mutation = useMutation((outId: number) =>
    offbasepassRepositoryImpl.patchApprovalCancel([outId])
  );
  return mutation;
};

export const usePatchCancel = () => {
  const mutation = useMutation((outId: number) =>
    offbasepassRepositoryImpl.patchCancel([outId])
  );
  return mutation;
};
