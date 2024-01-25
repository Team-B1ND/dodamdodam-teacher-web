import { AxiosError } from "axios";
import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  useQuery,
  UseQueryOptions,
} from "react-query";
import {
  BusDateParam,
  BusUpdateParam,
} from "../../repositories/Bus/BusRepository";
import busRepositoryImpl from "../../repositories/Bus/BusRepositoryImpl";
import {
  BusDateResponse,
  BusListResponse,
  BusResponse,
} from "../../types/Bus/Bus.type";
import { QUERY_KEYS } from "../queryKey";

export const useGetRegisteredBusQuery = (
  options?: UseQueryOptions<BusResponse, AxiosError, BusResponse, string>
) =>
  useQuery(
    QUERY_KEYS.bus.registeredBus,
    () => busRepositoryImpl.getRegisteredBus(),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetAllBusListQuery = (
  options: UseInfiniteQueryOptions<
    BusListResponse,
    AxiosError,
    BusListResponse,
    BusListResponse,
    string
  >
) =>
  useInfiniteQuery(
    QUERY_KEYS.bus.bustList,
    ({ pageParam = 1 }) => busRepositoryImpl.getAllBusList({ page: pageParam }),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetBusDateQuery = (
  param: BusDateParam,
  options?: UseQueryOptions<
    BusDateResponse,
    AxiosError,
    BusDateResponse,
    (string | BusDateParam)[]
  >
) => {
  return useQuery(
    QUERY_KEYS.bus.busDate(param),
    () => busRepositoryImpl.getBusDate(param),
    {
      ...options,
      enabled: !!param,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );
};

export const useCreateBusMutation = () => {
  const mutation = useMutation((param: BusUpdateParam) =>
    busRepositoryImpl.createBus(param)
  );
  return mutation;
};

export const useModifyBusMutation = () => {
  const mutation = useMutation((param: BusUpdateParam) =>
    busRepositoryImpl.modifyBus(param)
  );
  return mutation;
};

export const useDeleteBusMutation = () => {
  const mutation = useMutation((id: number) => busRepositoryImpl.deleteBus(id));
  return mutation;
};
