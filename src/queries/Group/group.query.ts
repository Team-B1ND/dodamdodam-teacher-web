import { AxiosError } from 'axios';
import { QUERY_KEYS } from 'queries/queryKey';
import { useMutation, useQuery, UseQueryOptions, useInfiniteQuery } from 'react-query';
import {
  GroupDetail,
  GroupMemberResponse,
  GroupMemberStatus,
  GroupWriteData,
} from 'repositories/Group/group.repository';
import groupRepositroy from 'repositories/Group/group.repositoryImpl';

export const useGroup = (isAtv: boolean, keyword?: string) => {
  return useInfiniteQuery(
    [QUERY_KEYS.group.getGroup, isAtv, keyword],
    ({ pageParam = 0 }) => (isAtv ? groupRepositroy.getMyGroup(pageParam, keyword!) : groupRepositroy.getGroup(pageParam, keyword!)),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.data.length < 10) return undefined;
        return lastPage.data[lastPage.data.length - 1].id;
      },
      suspense: true,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );
};

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

export const useGetAllowedGroupMemberQuery = (
  id: number,
  options?: UseQueryOptions<GroupMemberResponse, AxiosError, GroupMemberResponse, (string | number)[]>
) =>
  useQuery(QUERY_KEYS.group.getGroupMember('ALLOWED', id), () => groupRepositroy.getGroupMember('ALLOWED', id), {
    enabled: !!id,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    ...options,
  });

export const useGetPendingGroupMemberQuery = (
  id: number,
  options?: UseQueryOptions<GroupMemberResponse, AxiosError, GroupMemberResponse, (string | number)[]>
) =>
  useQuery(QUERY_KEYS.group.getGroupMember('PENDING', id), () => groupRepositroy.getGroupMember('PENDING', id), {
    ...options,
  });

export const usePatchGroupMemberStatusMutation = () => {
  const muatation = useMutation((param: { status: GroupMemberStatus; id: number; memberId: number[] }) =>
    groupRepositroy.patchGroupMemberStatus(param.status, param.id, param.memberId)
  );

  return muatation;
};
