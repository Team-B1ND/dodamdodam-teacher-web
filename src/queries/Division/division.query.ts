import { UseQueryOptions, useQuery } from "react-query";
import { AxiosError } from "axios";
import { DivisionResponse } from "types/Division/division.type";
import { QUERY_KEYS } from "queries/queryKey";
import divisionRepositoryImpl from "repositories/Division/division.repositoryImpl";

export const useGetDivisionList = (
  lastId: number,
  limit: number,
  keyword: string,
  options?: UseQueryOptions<
    DivisionResponse,
    AxiosError,
    DivisionResponse,
    string[]
  >
) =>
  useQuery(
    QUERY_KEYS.division.getDivisionList(lastId, limit, keyword),
    () => divisionRepositoryImpl.getDivisionList(lastId, limit, keyword),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  );
