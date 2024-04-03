import { UseQueryOptions, UseQueryResult, useQuery } from "react-query";
import { QUERY_KEYS } from "../queryKey";
import memberRepositoryImpl from "../../repositories/Member/MemberRepositoryImpl";
import {
  MemberResponse,
  MyMemberResponse,
} from "../../types/Member/member.type";
import { AxiosError } from "axios";

export const useGetAllMemberListQuery = (
  options?: UseQueryOptions<MemberResponse, AxiosError, MemberResponse, string>
): UseQueryResult<MemberResponse, AxiosError> =>
  useQuery(
    QUERY_KEYS.member.getAllMember,
    () => memberRepositoryImpl.getAllMemberList(),
    { ...options }
  );

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
  );
