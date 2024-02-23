import { B1ndToast } from "@b1nd/b1nd-toastify";
import {
  usePatchLeaveApproval,
  usePatchLeaveApprovalCancel,
  usePatchLeaveCancel,
} from "../../../queries/OffBaseLeave/offbaseleave.query";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "../../../queries/queryKey";
import { useRecoilState } from "recoil";
import { UploadDateAtom } from "../../../stores/OffBase/offbase.store";

const useOffBaseLeave = () => {
  const queryClient = useQueryClient();
  const patchLeaveApproval = usePatchLeaveApproval();
  const patchLeaveCancel = usePatchLeaveCancel();
  const patchLeaveApprovalCancel = usePatchLeaveApprovalCancel();

  const [uploadDate, setUploadDate] = useRecoilState<string>(UploadDateAtom);

  const handleOffBaseLeave = (outId: number, query: any) => {
    query.mutate(outId, {
      onSuccess: () => {
        if (query === patchLeaveApproval)
          B1ndToast.showSuccess("외박 승인 성공");

        if (query === patchLeaveCancel) B1ndToast.showSuccess("외박 거절 성공");

        if (query === patchLeaveApprovalCancel)
          B1ndToast.showSuccess("외박 승인 취소 성공");

        queryClient.invalidateQueries(
          QUERY_KEYS.offbasepass.getOffBasePass(uploadDate)
        );
      },
      onError: () => {
        console.log("외박 승인 실패");
      },
    });
  };

  return {
    handleOffBaseLeave,
    patchLeaveApproval,
    patchLeaveCancel,
    patchLeaveApprovalCancel,
  };
};
export default useOffBaseLeave;
