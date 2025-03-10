import {
  UseQueryOptions,
  UseQueryResult,
  useMutation,
  useQuery,
} from 'react-query'
import { QUERY_KEYS } from '../queryKey'
import memberRepositoryImpl from 'repositories/Member/MemberRepositoryImpl'
import { MemberResponse, MyMemberResponse } from 'types/Member/member.type'
import { AxiosError } from 'axios'
import { AuthCodeReqProps, AuthCodeSendProps } from 'repositories/Member/MemberRepository'

export const useGetAllMemberListQuery = (
  options?: UseQueryOptions<MemberResponse, AxiosError, MemberResponse, string>
): UseQueryResult<MemberResponse, AxiosError> =>
  useQuery(
    QUERY_KEYS.member.getAllMember,
    () => memberRepositoryImpl.getAllMemberList(),
    { ...options }
  )

export const useGetMyMemberQuery = (
  options?: UseQueryOptions<
    MyMemberResponse,
    AxiosError,
    MyMemberResponse,
    string
  >
): UseQueryResult<MyMemberResponse, AxiosError> =>
  useQuery(
    QUERY_KEYS.member.getMyMember,
    () => memberRepositoryImpl.getMyMember(),
    { ...options }
  )

export const useReqAuthCode = () => {
  const mutation = useMutation((AuthCodeReq: AuthCodeReqProps) =>
    memberRepositoryImpl.reqAuthCode(AuthCodeReq)
  )
  return mutation
}

export const useSendAuthCode = () => {
  const mutation = useMutation((AuthCodeSend: AuthCodeSendProps) =>
    memberRepositoryImpl.authCodeVerify(AuthCodeSend)
  )
  return mutation
}
