import { UseQueryOptions, UseQueryResult, useQuery } from "react-query";
import { QUERY_KEYS } from "../queryKey";
import memberRepositoryImpl from "../../repositories/Member/MemberRepositoryImpl";
import { MemberListType } from "../../types/Member/member.type";
import { AxiosError } from "axios";

export const useGetAllMemberListQuery = (
  options?: UseQueryOptions<MemberListType, AxiosError, MemberListType, string>
): UseQueryResult<MemberListType, AxiosError> =>
  useQuery(
    QUERY_KEYS.member.getAllMember,
    () => memberRepositoryImpl.getAllMemberList(),
    { ...options }
  );
