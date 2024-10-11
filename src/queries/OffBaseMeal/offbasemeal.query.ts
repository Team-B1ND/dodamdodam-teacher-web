import { AxiosError } from "axios";
import { QUERY_KEYS } from "queries/queryKey";
import { UseQueryOptions, useQuery } from "react-query";
import offbasemealRepositoryImpl from "repositories/OffBaseMeal/offbasemealRepositoryImpl";
import { OffBaseMealResponse } from "types/OffBaseMeal/offbasemeal.type";

export const useGetMealDemandQuery = (
  date: string,
  options?: UseQueryOptions<OffBaseMealResponse, AxiosError, OffBaseMealResponse, string[]>,
) =>
  useQuery(QUERY_KEYS.offbasemeal.getMealDemand(date), () => offbasemealRepositoryImpl.getMealDemand(date), {
    enabled: !!date,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    ...options,
  });
