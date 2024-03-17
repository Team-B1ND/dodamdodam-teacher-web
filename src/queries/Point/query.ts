import { AxiosError } from "axios";
import { UseQueryOptions, useMutation, useQuery } from "react-query";
import PointRepositoryImpl from "repositories/Point/PointRepositoryImpl";
import {
  PointReasonResponse,
  PointResponse,
  PointType,
} from "types/Point/types";

export const useGetPointAllMemberQuery = (
  type: string,
  options?: UseQueryOptions<PointResponse, AxiosError, PointResponse, string[]>
) =>
  useQuery(
    ["point/getAllMemberPoint", type],
    () => PointRepositoryImpl.getPointAllMember(type),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  );

export const useGetPointReasonQuery = (
  type: string,
  options?: UseQueryOptions<
    PointReasonResponse,
    AxiosError,
    PointReasonResponse,
    string[]
  >
) =>
  useQuery(
    ["point/getPointReason", type],
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
