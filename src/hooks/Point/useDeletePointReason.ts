import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useDeletePointReasonMutation } from "queries/Point/query";
import React from "react";

const useDeletePointReason = () => {
  const deletePointReasonMutation = useDeletePointReasonMutation();

  const onDeletePointReason = (id: number) => {
    deletePointReasonMutation.mutate(id, {
      onSuccess: () => {
        B1ndToast.showSuccess("삭제 되었습니다");
      },
    });
  };
  return { onDeletePointReason };
};

export default useDeletePointReason;
