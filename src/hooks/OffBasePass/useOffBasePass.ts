import { B1ndToast } from "@b1nd/b1nd-toastify";
import {
  usePatchApproval,
  usePatchApprovalCancel,
  usePatchArrived,
  usePatchCancel,
} from "../../queries/OffBasePass/offbasepass.query";

const useOffBasePass = () => {
  const patchApprovals = usePatchApproval();
  const patchApprovalCancel = usePatchApprovalCancel();
  const patchCancel = usePatchCancel();
  const patchArrived = usePatchArrived();

  const handleOffBasePass = (outId: number, query: any) => {
    query.mutate(outId, {
      onSuccess: () => {
        if (query == patchApprovals) {
          B1ndToast.showSuccess("외출 승인 성공");
          return;
        }
        if (query == patchApprovalCancel) {
          B1ndToast.showSuccess("외출 승인 취소 성공");
          return;
        }
        if (query == patchCancel) {
          B1ndToast.showSuccess("외출 거절 성공");
          return;
        }
      },
      onError: () => {
        console.log("실패");
      },
    });
  };

  const handleOffBaseArrived = (id: number) => {
    patchArrived.mutate(id, {
      onSuccess: () => {
        B1ndToast.showSuccess("외출 복귀 처리 완료");
      },
      onError: () => {
        console.log("실패");
      },
    });
  };

  return {
    handleOffBasePass,
    patchApprovals,
    patchApprovalCancel,
    patchCancel,
    handleOffBaseArrived,
  };
};

export default useOffBasePass;
