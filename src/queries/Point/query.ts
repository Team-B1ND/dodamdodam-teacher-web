import { AxiosError } from "axios";
import { UseQueryOptions, useMutation, useQuery } from "react-query";
import PointRepositoryImpl from "repositories/Point/PointRepositoryImpl";
import { PointReasonResponse, PointResponse } from "types/Point/types";

export const useGetPointAllMemberQuery = (
  options?: UseQueryOptions<
    PointResponse,
    AxiosError,
    PointResponse,
    "point/getAllMemberPoint"
  >
) =>
  useQuery(
    "point/getAllMemberPoint",
    () => PointRepositoryImpl.getPointAllMember(),
    {
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
    () => PointRepositoryImpl.getPointReason(type),
    {
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
