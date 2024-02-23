import { B1ndToast } from "@b1nd/b1nd-toastify";
import {
  usePatchLateNightAllow,
  usePatchLateNightCancel,
} from "../../../queries/LateNight/latenight.query";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "../../../queries/queryKey";

const useLateNightAllow = () => {
  const patchLateNightAllow = usePatchLateNightAllow();
  const patchLateNightCancel = usePatchLateNightCancel();
  const queryClient = useQueryClient();

  const handleLateNightAllow = (id: number, query: any) => {
    query.mutate(id, {
      onSuccess: () => {
        if (query === patchLateNightAllow)
          B1ndToast.showSuccess("심자 승인 성공");

        if (query === patchLateNightCancel)
          B1ndToast.showSuccess("심자 거절 성공");

        queryClient.invalidateQueries(QUERY_KEYS.latenight.getPendingLateNight);
      },
      onError: () => {
        B1ndToast.showError("에러");
      },
    });
  };

  return { handleLateNightAllow, patchLateNightAllow, patchLateNightCancel };
};

export default useLateNightAllow;
