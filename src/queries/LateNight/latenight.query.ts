import { UseQueryOptions, useMutation, useQuery } from "react-query";
import { OffBaseResponse } from "../../types/OffBasePass/offbasepass.type";
import { AxiosError } from "axios";
import { LateNightResponse } from "../../types/LateNight/latenight.type";
import { QUERY_KEYS } from "../queryKey";
import latenightRepositoryImpl from "../../repositories/LateNight/latenight.repositoryImpl";

export const useGetPendingLateNight = (
  options?: UseQueryOptions<
    LateNightResponse,
    AxiosError,
    LateNightResponse,
    string
  >
) =>
  useQuery(
    QUERY_KEYS.latenight.getPendingLateNight,
    () => latenightRepositoryImpl.getPendingLateNight(),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  );

export const useGetLateNightList = (
  options?: UseQueryOptions<
    LateNightResponse,
    AxiosError,
    LateNightResponse,
    string
  >
) =>
  useQuery(
    QUERY_KEYS.latenight.getLateNightList,
    () => latenightRepositoryImpl.getLateNightList(),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  );

export const usePatchLateNightAllow = () => {
  const mutation = useMutation((id: number) =>
    latenightRepositoryImpl.patchLateNightAllow(id)
  );
  return mutation;
};

export const usePatchLateNightCancel = () => {
  const mutation = useMutation((id: number) =>
    latenightRepositoryImpl.patchLateNightCancel(id)
  );
  return mutation;
};
