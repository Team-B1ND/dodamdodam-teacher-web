import {
  usePatchApproval,
  usePatchApprovalCancel,
} from "../../queries/OffBasePass/offbasepass.query";

const useOffBasePass = () => {
  const patchApprovals = usePatchApproval();
  const patchApprovalCancel = usePatchApprovalCancel();

  const handleOffBaseApproval = (outId: number) => {
    patchApprovals.mutate(outId, {
      onSuccess: () => {
        console.log("외출 승인 성공");
      },
      onError: () => {
        console.log("실패");
      },
    });
  };

  const handleOffBaseApprovalCancel = (outId: number) => {
    patchApprovalCancel.mutate(outId, {
      onSuccess: () => {
        console.log("성공");
      },
      onError: () => {
        console.log("실패");
      },
    });
  };

  return { handleOffBaseApproval, handleOffBaseApprovalCancel };
};

export default useOffBasePass;
