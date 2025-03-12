import { AxiosError } from 'axios'
import { QUERY_KEYS } from 'queries/queryKey'
import {
  useMutation,
  useQuery,
  UseQueryOptions,
  useInfiniteQuery,
} from 'react-query'
import {
  DivisionDetail,
  DivisionMemberResponse,
  DivisionMemberStatus,
  DivisionWriteData,
  AddMemberData,
} from 'repositories/Division/division.repository'
import divisionRepository from 'repositories/Division/division.repositoryImpl'

export const useDivision = (isAtv: boolean, keyword?: string) => {
  return useInfiniteQuery(
    [QUERY_KEYS.division.getDivision, isAtv, keyword],
    ({ pageParam = 0 }) =>
      isAtv
        ? divisionRepository.getMyDivision(pageParam, keyword!)
        : divisionRepository.getDivision(pageParam, keyword!),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.data.length < 10) return undefined
        return lastPage.data[lastPage.data.length - 1].id
      },
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  )
}

export const useCreateDivisionMutation = () => {
  const mutation = useMutation((param: DivisionWriteData) =>
    divisionRepository.createDivision(param)
  )

  return mutation
}

export const useCreateAddMemberMutation = () => {
  const mutation = useMutation((param: AddMemberData) =>
    divisionRepository.addMember(param)
  )

  return mutation
}

export const useGetDivisionDetailQuery = (
  id: number,
  options?: UseQueryOptions<
    DivisionDetail,
    AxiosError,
    DivisionDetail,
    (string | number)[]
  >
) =>
  useQuery(
    QUERY_KEYS.division.getDivisionDetail(id),
    () => divisionRepository.getDivisionDetail(id),
    {
      enabled: !!id,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  )

export const useGetAllowedDivisionMemberQuery = (
  id: number,
  options?: UseQueryOptions<
    DivisionMemberResponse,
    AxiosError,
    DivisionMemberResponse,
    (string | number)[]
  >
) =>
  useQuery(
    QUERY_KEYS.division.getDivisionMember('ALLOWED', id),
    () => divisionRepository.getDivisionMember('ALLOWED', id),
    {
      enabled: !!id,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  )

export const useGetPendingDivisionMemberQuery = (
  id: number,
  options?: UseQueryOptions<
    DivisionMemberResponse,
    AxiosError,
    DivisionMemberResponse,
    (string | number)[]
  >
) =>
  useQuery(
    QUERY_KEYS.division.getDivisionMember('PENDING', id),
    () => divisionRepository.getDivisionMember('PENDING', id),
    {
      ...options,
    }
  )

export const usePatchDivisionMemberStatusMutation = () => {
  const muatation = useMutation(
    (param: { status: DivisionMemberStatus; id: number; memberId: number[] }) =>
      divisionRepository.patchDivisionMemberStatus(
        param.status,
        param.id,
        param.memberId
      )
  )

  return muatation
}
