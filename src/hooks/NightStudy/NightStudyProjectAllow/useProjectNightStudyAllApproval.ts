import { usePatchNightStudyProjectAllow, usePatchNightStudyProjectReject, useGetPendingNightStudyProject } from "queries/NightStudy/nightstudy.query";
import { useQueryClient } from "react-query";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { QUERY_KEYS } from "queries/queryKey";

const useProjectNightStudyAllApproval = () => {
  const patchAllow = usePatchNightStudyProjectAllow();
  const patchReject = usePatchNightStudyProjectReject();
  const getPendingProjects = useGetPendingNightStudyProject();
  const queryClient = useQueryClient();

  const handleAll = async (type: 'approve' | 'reject') => {
    try {
      const res = await getPendingProjects.refetch();
      const projects = res?.data?.data ?? [];

      if (projects.length === 0) {
        B1ndToast.showInfo("처리할 요청이 없습니다.");
        return;
      }

      const patch = type === 'approve' ? patchAllow : patchReject;

      await Promise.all(
        projects.map(p =>
          new Promise<void>((resolve, reject) => {
            patch.mutate(p.id, {
              onSuccess: () => resolve(),
              onError: () => reject()
            });
          })
        )
      );

      B1ndToast.showSuccess(`모든 요청이 ${type === 'approve' ? '승인' : '거절'}되었습니다.`);
      queryClient.invalidateQueries(QUERY_KEYS.nightstudy.getPendingNightStudyProject);

    } catch {
      B1ndToast.showError(`요청 처리 중 오류가 발생했습니다.`);
    }
  };

  return {
    allApproveProjects: () => handleAll('approve'),
    allRejectProjects: () => handleAll('reject')
  };
};

export default useProjectNightStudyAllApproval;
