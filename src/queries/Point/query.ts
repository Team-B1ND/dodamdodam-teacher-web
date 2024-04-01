import { AxiosError } from "axios";
import { QUERY_KEYS } from "queries/queryKey";
import { UseQueryOptions, useMutation, useQuery } from "react-query";
import { GetPointByStudentIdParam } from "repositories/Point/PointRepository";
import PointRepositoryImpl from "repositories/Point/PointRepositoryImpl";
import {
  PointReasonResponse,
  PointResponse,
  PointScoreForStudentResonse,
  PointType,
} from "types/Point/types";

export const useGetPointAllMemberQuery = (
  type: string,
  options?: UseQueryOptions<PointResponse, AxiosError, PointResponse, string[]>
) =>
  useQuery(
    QUERY_KEYS.point.getAllMemberPoint(type),
    () => PointRepositoryImpl.getPointAllMember(type),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  );

export const useGetPointScoreByStudentIdQuery = (
  { studentId, type }: GetPointByStudentIdParam,
  options?: UseQueryOptions<
    PointScoreForStudentResonse,
    AxiosError,
    PointScoreForStudentResonse,
    (string | number)[]
  >
) =>
  useQuery(
    QUERY_KEYS.point.getPointScoreByStudentId(studentId),
    () => PointRepositoryImpl.getPointByStudentId({ studentId, type }),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  );

export const useGetPointReasonQuery = (
  type: PointType,
  options?: UseQueryOptions<
    PointReasonResponse,
    AxiosError,
    PointReasonResponse,
    string[]
  >
) =>
  useQuery(
    QUERY_KEYS.point.getReasons(type),
    () => PointRepositoryImpl.getPointReason(type as PointType),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  );

export const useCreatePointReasonMutation = () => {
  const mutation = useMutation(PointRepositoryImpl.createPointReason);
  return mutation;
};

export const useDeletePointReasonMutation = () => {
  const mutation = useMutation(PointRepositoryImpl.deletePointReason);
  return mutation;
};

export const useGivePointStudentQuery = () => {
  const mutation = useMutation(PointRepositoryImpl.givePoint);
  return mutation;
};
