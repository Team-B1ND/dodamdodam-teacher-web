import { AxiosError } from "axios";
import { useMutation, useQuery, UseQueryOptions } from "react-query";
import { BusDateParam, BusUpdateParam } from "repositories/Bus/BusRepository";
import busRepositoryImpl from "repositories/Bus/BusRepositoryImpl";
import {
  BusDateResponse,
  BusListResponse,
  BusResponse,
} from "types/Bus/Bus.type";
import { QUERY_KEYS } from "../queryKey";

export const useGetRegisteredBusQuery = (
  options?: UseQueryOptions<BusResponse, AxiosError, BusResponse, string>
) =>
  useQuery(
    QUERY_KEYS.bus.registeredBus,
    () => busRepositoryImpl.getRegisteredBus(),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  );

export const useGetAllBusListQuery = (
  page: number,
  options: UseQueryOptions<
    BusListResponse,
    AxiosError,
    BusListResponse,
    (string | number)[]
  >
) =>
  useQuery(
    QUERY_KEYS.bus.bustList(page),
    () => busRepositoryImpl.getAllBusList(page),
    {
      enabled: !!page,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
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
) =>
  useQuery(
    QUERY_KEYS.bus.busDate(param),
    () => busRepositoryImpl.getBusDate(param),
    {
      enabled: !!param,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  );

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
