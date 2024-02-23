import { UseQueryOptions, useQuery } from "react-query";
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
