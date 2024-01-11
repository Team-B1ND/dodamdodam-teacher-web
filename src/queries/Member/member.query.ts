import { UseQueryOptions, UseQueryResult, useQuery } from "react-query";
import { QUERY_KEYS } from "../queryKey";
import memberRepositoryImpl from "../../repositories/Member/member.repositoryImpl";
import { MemberListType } from "../../types/Member/Member.type";
import { AxiosError } from "axios";

export const useGetAllMemberListQuery = (
  options?: UseQueryOptions<MemberListType, AxiosError, MemberListType, string>
): UseQueryResult<MemberListType, AxiosError> =>
  useQuery(
    QUERY_KEYS.member.getAllMember,
    () => memberRepositoryImpl.getAllMemberList(),
    { ...options }
  );
