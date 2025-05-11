import { usePatchNightStudyProjectAllow, usePatchNightStudyProjectReject, usePatchNightStudyProjectRevert } from "queries/NightStudy/nightstudy.query";
import { useQueryClient } from "react-query";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { QUERY_KEYS } from "queries/queryKey";

const useProjectNightStudyApproval = () => {
  const patchAllow = usePatchNightStudyProjectAllow();
  const patchReject = usePatchNightStudyProjectReject();
  const patchRevert = usePatchNightStudyProjectRevert();
  const queryClient = useQueryClient();

  const approveProject = (id: number) => {
    patchAllow.mutate(id, {
      onSuccess: () => {
        B1ndToast.showSuccess("프로젝트 심자 승인 완료");
        queryClient.invalidateQueries({
          queryKey: QUERY_KEYS.nightstudy.getPendingNightStudyProject,
          refetchActive: true 
        });
        queryClient.invalidateQueries(QUERY_KEYS.nightstudy.getNightStudyAllowedProjects);
      },
      onError: () => {
        B1ndToast.showError("승인 중 오류 발생");
      },
    });
  };

  const rejectProject = (id: number) => {
    patchReject.mutate(id, {
      onSuccess: () => {
        B1ndToast.showSuccess("프로젝트 심자 거절 완료");
        queryClient.invalidateQueries({
          queryKey: QUERY_KEYS.nightstudy.getPendingNightStudyProject,
          refetchActive: true  
        });
      },
      onError: () => {
        B1ndToast.showError("거절 중 오류 발생");
      },
    });
  };

  const revertProject = (id: number) => {
    patchRevert.mutate(id, {
      onSuccess: () => {
        B1ndToast.showSuccess("프로젝트 심자 승인 취소 완료");
        queryClient.invalidateQueries({
          queryKey: QUERY_KEYS.nightstudy.getNightStudyAllowedProjects,
          refetchActive: true  
        });
        queryClient.invalidateQueries(QUERY_KEYS.nightstudy.getPendingNightStudyProject);
      },
      onError: () => {
        B1ndToast.showError("승인 취소 중 오류 발생");
      },
    });
  };

  return { approveProject, rejectProject, revertProject };
};

export default useProjectNightStudyApproval;
