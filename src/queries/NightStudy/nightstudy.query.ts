import { UseQueryOptions, useMutation, useQuery } from "react-query";
import {ProjectNightStudyResponse, ProjectStudentsResponse, ProjectUseingLabResponse } from "types/NightStudy/nightstudy.type";
import {AxiosError} from "axios";
import {NightStudyBanResponse, NightStudyResponse, ProjectStudyDetailResponseType} from "types/NightStudy/nightstudy.type";
import {QUERY_KEYS} from "../queryKey";
import nightstudyRepositoryImpl from "repositories/NightStudy/nightstudy.repositoryImpl";
import nightStudyRepositoryImpl from "repositories/NightStudy/nightstudy.repositoryImpl";

export const useGetBannedNightMemberListQuery = (
  options?: UseQueryOptions<
    NightStudyBanResponse,
    AxiosError,
    NightStudyBanResponse,
    string
  >
) =>
  useQuery(
    QUERY_KEYS.nightstudy.getNightStudyBanMember,
    () => nightstudyRepositoryImpl.getNightStudyBanMember(),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  );

export const useGetPendingNightStudy = (
  options?: UseQueryOptions<
    NightStudyResponse,
    AxiosError,
    NightStudyResponse,
    string
  >
) =>
  useQuery(
    QUERY_KEYS.nightstudy.getPendingNightStudy,
    () => nightstudyRepositoryImpl.getPendingNightStudy(),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  );

export const useGetNightStudyList = (
  options?: UseQueryOptions<
    NightStudyResponse,
    AxiosError,
    NightStudyResponse,
    string
  >
) =>
  useQuery(
    QUERY_KEYS.nightstudy.getNightStudyList,
    () => nightstudyRepositoryImpl.getNighStudytList(),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  );

export const usePatchNightStudyAllow = () => {
  const mutation = useMutation((id: number) =>
    nightstudyRepositoryImpl.patchNightStudyAllow(id)
  );
  return mutation;
};

export const usePatchNightStudyCancel = () => {
  const mutation = useMutation((id: number) =>
    nightstudyRepositoryImpl.patchNightStudyCancel(id)
  );
  return mutation;
};
export const useDeleteNightStudyAllow = ()=>{
  const mutation = useMutation((id: number)=>
    nightStudyRepositoryImpl.deleteNightStudyAllow(id)
  )
  return mutation
}

export const usePatchNightStudyProjectAllow = () => {
  const mutation = useMutation(
    ({ id, room }: { id: number; room: string }) =>
      nightstudyRepositoryImpl.patchNightStudyProjectAllow(id, room)
  );
  return mutation;
};

export const usePatchNightStudyProjectReject=()=>{
  const mutation = useMutation((id:number)=>
    nightStudyRepositoryImpl.patchNightStudyProjectReject(id)
  );
  return mutation;
}

export const usePatchNightStudyProjectRevert=()=>{
  const mutation = useMutation((id:number)=>
    nightStudyRepositoryImpl.patchNightStudyProjectRevert(id)
  );
  return mutation;
}

export const useGetPendingNightStudyProject = (options?:UseQueryOptions<ProjectNightStudyResponse, AxiosError,ProjectNightStudyResponse,string>) => {
  return useQuery(
    QUERY_KEYS.nightstudy.getPendingNightStudyProject,
    ()=>nightstudyRepositoryImpl.getPendingNightStudyPending(),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  )
}

export const useGetNightStudyAllowedProjects = (options?:UseQueryOptions<ProjectNightStudyResponse, AxiosError,ProjectNightStudyResponse,string>) => {
  return useQuery(
    QUERY_KEYS.nightstudy.getNightStudyAllowedProjects,
    ()=>nightstudyRepositoryImpl.getNightStudyAllowedProjects(),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  )
}

export const useGetNightStudyProjectDetail = (
  { id }: { id: number },
  options?: UseQueryOptions<
    ProjectStudyDetailResponseType,
    AxiosError,
    ProjectStudyDetailResponseType
  >
) => {
  return useQuery<ProjectStudyDetailResponseType, AxiosError>(
    [QUERY_KEYS.nightstudy.getNightStudyDetail, id],
    () => nightstudyRepositoryImpl.getNightStudyProjectDetail(id),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      ...options,
    }
  );
};

export const useGetNightStudyProjectStudents = (options?:UseQueryOptions<ProjectStudentsResponse, AxiosError,ProjectStudentsResponse,string>) => {
  return useQuery(
    QUERY_KEYS.nightstudy.getNightStudyProjectStudents,
    ()=>nightstudyRepositoryImpl.getNightStudyProjectStudents(),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  )
}

export const useGetProjectUsingLab = (options?:UseQueryOptions<ProjectUseingLabResponse, AxiosError,ProjectUseingLabResponse,string>) => {
  return useQuery(
    QUERY_KEYS.nightstudy.getProjectUsingLab,
    ()=>nightstudyRepositoryImpl.getProjectUsingLab(),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  )
};

export const useDeleteNightStudyBan = () => {
  return useMutation((id: number) =>
    nightstudyRepositoryImpl.deleteNightStudyBan(id)
  )
}

export const useCreatePointReasonMutation = () => {
  return useMutation(nightstudyRepositoryImpl.createNightStudyBan);
};
