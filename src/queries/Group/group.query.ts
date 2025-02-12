import { AxiosError } from 'axios';
import { QUERY_KEYS } from 'queries/queryKey';
import { useMutation, useQuery, UseQueryOptions } from 'react-query';
import {
  GroupDetail,
  GroupMemberResponse,
  GroupMemberStatus,
  GroupWriteData,
} from 'repositories/Group/group.repository';
import groupRepositroy from 'repositories/Group/group.repositoryImpl';

export const useGetGroup = () => {};

export const useCreateGroupMutation = () => {
  const mutation = useMutation((param: GroupWriteData) => groupRepositroy.createGroup(param));

  return mutation;
};

export const useGetGroupDetailQuery = (
  id: number,
  options?: UseQueryOptions<GroupDetail, AxiosError, GroupDetail, (string | number)[]>
) =>
  useQuery(QUERY_KEYS.group.getGroupDetail(id), () => groupRepositroy.getGroupDetail(id), {
    enabled: !!id,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    ...options,
  });

export const useGetGroupMemberQuery = (
  status: GroupMemberStatus,
  id: number,
  options?: UseQueryOptions<GroupMemberResponse, AxiosError, GroupMemberResponse, (string | number)[]>
) =>
  useQuery(QUERY_KEYS.group.getGroupMember(status, id), () => groupRepositroy.getGroupMember(status, id), {
    enabled: !!status,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    ...options,
  });
