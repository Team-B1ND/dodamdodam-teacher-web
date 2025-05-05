import { UseQueryOptions, useMutation, useQuery } from "react-query";
import { AxiosError } from "axios";
import { NightStudyResponse, ProjectNightStudyResponse } from "types/NightStudy/nightstudy.type";
import { QUERY_KEYS } from "../queryKey";
import nightstudyRepositoryImpl from "repositories/NightStudy/nightstudy.repositoryImpl";
import nightStudyRepositoryImpl from "repositories/NightStudy/nightstudy.repositoryImpl";

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