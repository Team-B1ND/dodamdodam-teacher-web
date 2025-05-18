import { useQueryClient } from 'react-query';
import { B1ndToast } from '@b1nd/b1nd-toastify';
import { QUERY_KEYS } from 'queries/queryKey';
import { usePatchNightStudyProjectReject } from 'queries/NightStudy/nightstudy.query';

export const useRejectProjectNightStudy = () => {
    const patchReject = usePatchNightStudyProjectReject();
    const queryClient = useQueryClient();
  
    const onRejectProject = (
      { id, rejectReason }: { id: number; rejectReason: string },
    ) => {
      patchReject.mutate(
        { id, rejectReason },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(QUERY_KEYS.nightstudy.getPendingNightStudyProject);
            B1ndToast.showSuccess('프로젝트 심자 신청이 성공적으로 거절되었습니다.');
          },
          onError: () => {
            B1ndToast.showError('거절 처리 중 오류가 발생했습니다.');
          },
        }
      );
    };
  
    return { onRejectProject };
  };