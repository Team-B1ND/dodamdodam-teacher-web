import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useDeletePointReasonMutation } from "queries/Point/query";

const useDeletePointReason = () => {
  const deletePointReasonMutation = useDeletePointReasonMutation();

  const onDeletePointReason = (id: number, reasonName: string) => {
    deletePointReasonMutation.mutate(id, {
      onSuccess: () => {
        B1ndToast.showSuccess(`${reasonName} 사유가 삭제 되었습니다`);
      },
    });
  };
  return { onDeletePointReason };
};

export default useDeletePointReason;
