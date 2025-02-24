import { AxiosError } from 'axios'
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  UseQueryOptions,
} from 'react-query'
import {
  BusDateParam,
  BusModifyParam,
  BusUpdateParam,
} from 'repositories/Bus/BusRepository'
import busRepositoryImpl from 'repositories/Bus/BusRepositoryImpl'
import { BusDateAndListResponse } from 'types/Bus/bus.type'
import { QUERY_KEYS } from '../queryKey'

export const useGetAllBusListQuery = (isAtv: boolean, keyword?: string) => {
  return useInfiniteQuery(
    [QUERY_KEYS.bus.busList, isAtv, keyword],
    ({ pageParam = 0 }) =>
      isAtv
        ? busRepositoryImpl.getAllBusList(pageParam)
        : busRepositoryImpl.getAllBusList(pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.data[lastPage.data.length - 1].id;
      },
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  )
}

export const useGetBusDateQuery = (
  param: BusDateParam,
  options?: UseQueryOptions<
    BusDateAndListResponse,
    AxiosError,
    BusDateAndListResponse,
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
  )

export const useCreateBusMutation = () => {
  const mutation = useMutation((param: BusUpdateParam) =>
    busRepositoryImpl.createBus(param)
  )
  return mutation
}

export const useModifyBusMutation = () => {
  const mutation = useMutation(({ busId, param }: BusModifyParam) =>
    busRepositoryImpl.modifyBus({ busId, param })
  )
  return mutation
}

export const useDeleteBusMutation = () => {
  const mutation = useMutation((id: number) => busRepositoryImpl.deleteBus(id))
  return mutation
}
