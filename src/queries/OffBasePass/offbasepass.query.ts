import { UseQueryOptions, UseQueryResult, useQuery } from "react-query";
import { QUERY_KEYS } from "../queryKey";
import offbasepassRepositoryImpl from "../../repositories/OffBasePass/offbasepass.repositoryImpl";
import { OffBaseParam } from "../../repositories/OffBasePass/offbasepass.repository";
import { OffBaseResponse } from "../../types/OffBasePass/offbasepass.type";
import { AxiosError } from "axios";

// export const useGetOffBasePassQuery = (
//   date: OffBaseParam,
//   options?: UseQueryOptions<
//     OffBaseResponse,
//     AxiosError,
//     OffBaseResponse,
//     string
//   >
// ) =>
//   useQuery(
//     QUERY_KEYS.offbasepass.getOffBasePass,
//     () => offbasepassRepositoryImpl.getOffBasePass(date),
//     {
//       ...options,
//       staleTime: 1000 * 60 * 60,
//       cacheTime: 1000 * 60 * 60,
//     }
//   );

export const useGetOffBasePassQuery = ({
  date,
}: OffBaseParam): UseQueryResult<OffBaseResponse> =>
  useQuery(
    ["out/date", date],
    () => offbasepassRepositoryImpl.getOffBasePass({ date }),
    {}
  );
