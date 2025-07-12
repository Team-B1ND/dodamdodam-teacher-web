import { AxiosError } from 'axios'
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  UseQueryOptions,
} from 'react-query'
import {
  BusUpdateParam,
  BusStudentParam
} from 'repositories/Bus/BusRepository'
import busRepositoryImpl from 'repositories/Bus/BusRepositoryImpl'
import { BusDateAndListResponse, BusDetailResponse} from 'types/Bus/bus.type'
import { QUERY_KEYS } from '../queryKey'

export const useGetAllBusListQuery = (
  options?: UseQueryOptions<
    BusDateAndListResponse,
    AxiosError,
    BusDateAndListResponse,
    string
  >
) =>
  useQuery(QUERY_KEYS.bus.busDate, () => busRepositoryImpl.getAllBusList(), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    ...options,
  })


  export const useGetBusDetailQuery = (
    id: number,
    options?: UseQueryOptions<BusDetailResponse, AxiosError, BusDetailResponse>
  ) =>{
    return useQuery<BusDetailResponse, AxiosError>(
      [QUERY_KEYS.bus.detail, id],
      () => busRepositoryImpl.getDetailBus(id),
      {
        staleTime: 1000 * 60 * 10,
        cacheTime: 1000 * 60 * 60,
        ...options,
      }
    );
  }

export const useCreateBusMutation = () => {
  const mutation = useMutation((name: string) =>
    busRepositoryImpl.createBus(name)
  )
  return mutation
}

export const useModifyBusMutation = () => {
  const mutation = useMutation(({busId, name} : BusUpdateParam) =>
    busRepositoryImpl.modifyBus({busId,name})
  )
  return mutation
}

export const useDeleteBusMutation = () => {
  const mutation = useMutation((id: number) => busRepositoryImpl.deleteBus(id))
  return mutation
}

export const useCreateBusBoardMutation = () => {
  const mutation = useMutation(({studentId, busId} : BusStudentParam)=>
    busRepositoryImpl.createBusBoard({studentId, busId})
  )
  return mutation
}