import { B1ndToast } from "@b1nd/b1nd-toastify";

import {
  usePatchNightStudyAllow,
  usePatchNightStudyCancel,
} from "queries/NightStudy/nightstudy.query";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "../../../queries/queryKey";

const useNightStudyAllow = () => {
  const patchNighStudytAllow = usePatchNightStudyAllow();
  const patchNightStudyCancel = usePatchNightStudyCancel();
  const queryClient = useQueryClient();

  const handleNightStudyAllow = (id: number, query: any) => {
    query.mutate(id, {
      onSuccess: () => {
        if (query === patchNighStudytAllow)
          B1ndToast.showSuccess("심자 승인 성공");

        if (query === patchNightStudyCancel)
          B1ndToast.showSuccess("심자 거절 성공");

        queryClient.invalidateQueries(
          QUERY_KEYS.nightstudy.getPendingNightStudy
        );
      },
      onError: () => {
        B1ndToast.showError("에러");
      },
    });
  };

  return { handleNightStudyAllow, patchNighStudytAllow, patchNightStudyCancel };
};

export default useNightStudyAllow;
