import { B1ndToast } from "@b1nd/b1nd-toastify";
import {
  usePatchApproval,
  usePatchApprovalCancel,
  usePatchCancel,
} from "../../../queries/OffBasePass/offbasepass.query";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "../../../queries/queryKey";
import { useRecoilState } from "recoil";
import { UploadDateAtom } from "../../../stores/OffBase/offbase.store";

const useOffBasePass = () => {
  const queryClient = useQueryClient();
  const patchApprovals = usePatchApproval();
  const patchApprovalCancel = usePatchApprovalCancel();
  const patchCancel = usePatchCancel();

  const [uploadDate, setUploadDate] = useRecoilState<string>(UploadDateAtom);

  const handleOffBasePass = (outId: number[], query: any) => {
    query.mutate(outId, {
      onSuccess: () => {
        if (query === patchApprovals) {
          B1ndToast.showSuccess("외출 승인 성공");
        }
        if (query === patchApprovalCancel) {
          B1ndToast.showSuccess("외출 승인 취소 성공");
        }
        if (query === patchCancel) {
          B1ndToast.showSuccess("외출 거절 성공");
        }

        queryClient.invalidateQueries(
          QUERY_KEYS.offbasepass.getOffBasePass(uploadDate)
        );
      },
      onError: () => {
        B1ndToast.showError("실패");
      },
    });
  };

  return {
    handleOffBasePass,
    patchApprovals,
    patchApprovalCancel,
    patchCancel,
  };
};

export default useOffBasePass;
