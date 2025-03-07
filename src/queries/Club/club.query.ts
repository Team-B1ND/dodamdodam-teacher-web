import { AxiosError } from "axios";
import { QUERY_KEYS } from "queries/queryKey";
import { useQuery, UseQueryOptions } from "react-query";
import ClubRepositoryImpl from "repositories/Club/ClubRepositoryImpl";
import { ClubResponse } from "types/Club/club.type";

export const useGetClubDateQuery = (
    options?: UseQueryOptions<
    ClubResponse,
      AxiosError,
      ClubResponse,
      string
    >
  ) =>
    useQuery(
      QUERY_KEYS.club.getClubs,
      () => ClubRepositoryImpl.getClubs(),
      {
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 10,
        ...options,
      }
    );