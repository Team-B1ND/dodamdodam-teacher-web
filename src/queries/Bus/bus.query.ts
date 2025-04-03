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
  CreateBusPeriodParam,
} from 'repositories/Bus/BusRepository'
import busRepositoryImpl from 'repositories/Bus/BusRepositoryImpl'
import {
  BusBasicInfoType,
  BusDateAndList,
  BusDateAndListResponse,
  BusListByPeriodResponse,
  BusPeriodResponse,
  BusPreset,
  BusPresetResponse,
  BusSeatResponse,
  StudentByBusResponse,
} from 'types/Bus/bus.type'
import { QUERY_KEYS } from '../queryKey'

export const useGetAllBusListQuery = (
  options?: UseQueryOptions<
    BusDateAndListResponse,
    AxiosError,
    BusDateAndListResponse,
    string
  >
) =>
  useQuery(
    QUERY_KEYS.bus.registeredBus,
    () => busRepositoryImpl.getAllBusList(),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  )

export const useGetBusDateQuery = (
  param: BusDateParam,
  options?: UseQueryOptions<
    BusDateAndListResponse,
    AxiosError,
    BusDateAndListResponse,
    string
  >
) =>
  useQuery(QUERY_KEYS.bus.busDate, () => busRepositoryImpl.getBusDate(param), {
    enabled: !!param,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    ...options,
  })

export const useGetBusPeriodQuery = (
  options?: UseQueryOptions<
    BusPeriodResponse,
    AxiosError,
    BusPeriodResponse,
    string
  >
) =>
  useQuery(QUERY_KEYS.bus.busPeriod, () => busRepositoryImpl.getBusPeriod(), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    ...options,
  })

export const useGetBusPresetQuery = (
  options?: UseQueryOptions<
    BusPresetResponse,
    AxiosError,
    BusPresetResponse,
    string
  >
) =>
  useQuery(QUERY_KEYS.bus.busPreset, () => busRepositoryImpl.getBusPreset(), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    ...options,
  })

export const useGetBusListByPeriodQuery = (
  timeId: number,
  options?: UseQueryOptions<
    BusListByPeriodResponse,
    AxiosError,
    BusListByPeriodResponse,
    (string | number)[]
  >
) =>
  useQuery(
    QUERY_KEYS.bus.busListByPeriod(timeId),
    () => busRepositoryImpl.getBusListByPeriod(timeId),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  )

export const useGetBusSeatsQuery = (
  id: number,
  options?: UseQueryOptions<
    BusSeatResponse,
    AxiosError,
    BusSeatResponse,
    (string | number)[]
  >
) =>
  useQuery(
    QUERY_KEYS.bus.busSeats(id),
    () => busRepositoryImpl.getBusSeats(id),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  )

export const useGetStudentByBusIdQuery = (
  id: number,
  options?: UseQueryOptions<
    StudentByBusResponse,
    AxiosError,
    StudentByBusResponse,
    (string | number)[]
  >
) =>
  useQuery(QUERY_KEYS.bus.studentByBusId(id), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    ...options,
  })

export const useGetPresetByIdQuery = (
  id: number,
  options?: UseQueryOptions<
    BusPreset,
    AxiosError,
    BusPreset,
    (string | number)[]
  >
) =>
  useQuery(
    QUERY_KEYS.bus.busPresetById(id),
    () => busRepositoryImpl.getPresetById(id),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  )

export const useCreateBusPeriodMutation = () => {
  const mutation = useMutation((param: CreateBusPeriodParam) =>
    busRepositoryImpl.createBusPeriod(param)
  )
  return mutation
}

export const useCreateBusMutation = () => {
  const mutation = useMutation((param: BusUpdateParam) =>
    busRepositoryImpl.createBus(param)
  )
  return mutation
}

export const useCreateBusPresetMutation = () => {
  const mutation = useMutation((param: Omit<BusBasicInfoType, 'id'>) =>
    busRepositoryImpl.createBusPreset(param)
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
