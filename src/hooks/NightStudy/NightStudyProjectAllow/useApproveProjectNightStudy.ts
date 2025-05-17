import { usePatchNightStudyProjectAllow } from "queries/NightStudy/nightstudy.query";
import { useQueryClient } from "react-query";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { QUERY_KEYS } from "queries/queryKey";

export const useApproveProjectNightStudy = () => {
    const patchAllow = usePatchNightStudyProjectAllow();
    const queryClient = useQueryClient();
  
    const approve = ({ id, room }: { id: number; room: string }) => {
      patchAllow.mutate({ id, room }, {
        onSuccess: () => {
            queryClient.invalidateQueries(QUERY_KEYS.nightstudy.getPendingNightStudyProject);
            queryClient.invalidateQueries(QUERY_KEYS.nightstudy.getNightStudyAllowedProjects);
            B1ndToast.showSuccess('성공적으로 심자 승인이 되었습니다!')
        },
        onError: () => B1ndToast.showError("심자 승인 중 오류가 생겼습니다."),
      });
    };
  
    return { approve };
  };

