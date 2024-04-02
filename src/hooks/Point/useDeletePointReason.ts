import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useDeletePointReasonMutation } from "queries/Point/point.query";
import { QUERY_KEYS } from "queries/queryKey";
import { useQueryClient } from "react-query";
import { PointType } from "types/Point/types";

const useDeletePointReason = () => {
  const queryClient = useQueryClient();
  const deletePointReasonMutation = useDeletePointReasonMutation();

  const onDeletePointReason = (
    id: number,
    reasonName: string,
    pointType: PointType
  ) => {
    deletePointReasonMutation.mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.point.getReasons(pointType));
        B1ndToast.showSuccess(`${reasonName} 사유가 삭제 되었습니다`);
      },
    });
  };
  return { onDeletePointReason };
};

export default useDeletePointReason;
