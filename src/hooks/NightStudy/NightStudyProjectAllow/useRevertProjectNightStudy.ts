import { usePatchNightStudyProjectRevert } from "queries/NightStudy/nightstudy.query";
import { useQueryClient } from "react-query";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { QUERY_KEYS } from "queries/queryKey";

const useRevertProjectNightStudy = () => {
  const patchRevert = usePatchNightStudyProjectRevert();
  const queryClient = useQueryClient();

  const onRevertProject = (id: number) => {
    patchRevert.mutate(id, {
      onSuccess: () => {
        B1ndToast.showSuccess("승인 취소 완료");
        queryClient.invalidateQueries({
          queryKey: QUERY_KEYS.nightstudy.getNightStudyAllowedProjects,
          refetchActive: true,
        });
        queryClient.invalidateQueries(QUERY_KEYS.nightstudy.getPendingNightStudyProject);
      },
      onError: () => B1ndToast.showError("승인 취소 실패"),
    });
  };

  return {onRevertProject};
};

export default useRevertProjectNightStudy;

