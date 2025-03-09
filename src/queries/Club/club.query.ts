import { AxiosError } from "axios";
import { dodamAxios } from "libs/Axios/customAxios";
import { QUERY_KEYS } from "queries/queryKey";
import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { useNavigate } from "react-router-dom";
import ClubRepositoryImpl from "repositories/Club/ClubRepositoryImpl";
import {
  ClubResponse,
  ClubDetailResponse,
  Member,
  BaseResponse,
  ClubState,
  ClubTime,
} from "types/Club/club.type";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import clubRepositoryImpl from "repositories/Club/ClubRepositoryImpl";
import { ClubPeriodParam } from "repositories/Club/ClubRepository";

export const useGetClubDateQuery = (
  options?: UseQueryOptions<ClubResponse, AxiosError, ClubResponse, string>
) =>
  useQuery(QUERY_KEYS.club.getClubs, () => ClubRepositoryImpl.getClubs(), {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    ...options,
  });

export const useGetClubDetailQuery = (
  { id }: { id: number },
  options?: UseQueryOptions<ClubDetailResponse, AxiosError>
) =>
  useQuery<ClubDetailResponse, AxiosError>(
    [QUERY_KEYS.club.getClub, id],
    () => ClubRepositoryImpl.getClub(id),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      ...options,
    }
  );

export const useGetClubMembersQuery = (
  { id }: { id: number },
  options?: UseQueryOptions<BaseResponse<Member>, AxiosError>
) =>
  useQuery<BaseResponse<Member>, AxiosError>(
    [QUERY_KEYS.club.getMembers, id],
    () => ClubRepositoryImpl.getMembers(id),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      ...(options ?? {}),
    }
  );

export const useClubMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: clubRepositoryImpl.patchClubState,
    onSuccess: () => {
      B1ndToast.showSuccess("성공적으로 업데이트 되었습니다");
      queryClient.invalidateQueries(QUERY_KEYS.club.getClubs);
    },
    onError: (error) => {
      console.error("클럽 상태 변경 실패:", error);
      B1ndToast.showError("동아리 상태 변경에 실패했습니다.");
    },
  });
};

export const useClubPeriodMutation = () => {
  const mutation = useMutation((param: ClubPeriodParam) =>
    clubRepositoryImpl.postClubPeriod(param)
  );

  return mutation;
};

export const useGetTimeQuery = (
  options?: UseQueryOptions<ClubTime, AxiosError>
): UseQueryResult<ClubTime, AxiosError> =>
  useQuery<ClubTime, AxiosError>(
    QUERY_KEYS.club.getTime,
    () => clubRepositoryImpl.getClubPeriod(),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      ...options,
    }
  );

export const useApplicateTeacherMutation = () => {
  const mutation = useMutation(
    (param: { clubId: number; teacherName: string }) =>
      clubRepositoryImpl.postApplicateTeacher(param.clubId, param.teacherName)
  );

  return mutation;
};
