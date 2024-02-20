import { useMutation } from "react-query";
import offbaseleaveRepositroy from "../../repositories/OffBaseLeave/offbaseleave.repositroy";

export const usePatchLeaveApproval = () => {
  const mutation = useMutation((outId: number) =>
    offbaseleaveRepositroy.patchLeaveApproval([outId])
  );
  return mutation;
};

export const usePatchLeaveCancel = () => {
  const mutation = useMutation((outId: number) =>
    offbaseleaveRepositroy.patchLeaveCancel([outId])
  );
  return mutation;
};

export const usePatchLeaveApprovalCancel = () => {
  const mutation = useMutation((outId: number) =>
    offbaseleaveRepositroy.patchLeaveApprovalCancel([outId])
  );
  return mutation;
};
