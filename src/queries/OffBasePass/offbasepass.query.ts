import { UseQueryResult, useMutation, useQuery } from "react-query";
import offbasepassRepositoryImpl from "../../repositories/OffBasePass/offbasepass.repositoryImpl";
import { OffBaseParam } from "../../repositories/OffBasePass/offbasepass.repository";
import { OffBaseResponse } from "../../types/OffBasePass/offbasepass.type";

export const useGetOffBasePassQuery = ({
  date,
}: OffBaseParam): UseQueryResult<OffBaseResponse> =>
  useQuery(
    ["out/date", date],
    () => offbasepassRepositoryImpl.getOffBasePass({ date }),
    {}
  );

export const usePatchApproval = () => {
  const mutation = useMutation((outId: number) =>
    offbasepassRepositoryImpl.patchApprovals([outId])
  );
  return mutation;
};
