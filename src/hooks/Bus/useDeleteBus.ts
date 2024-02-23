import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useQueryClient } from "react-query";
import { useDeleteBusMutation } from "../../queries/Bus/Bus.query";
import { QUERY_KEYS } from "../../queries/queryKey";

export const useDeleteBus = () => {
  const deleteBus = useDeleteBusMutation();
  const queryClient = useQueryClient();

  const handleDeleteBusClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    busId: number
  ) => {
    e.preventDefault();
    const answer = window.confirm("버스를 삭제하시겠습니까?");

    if (answer) {
      deleteBus.mutate(busId, {
        onSuccess: () => {
          queryClient.invalidateQueries(QUERY_KEYS.bus.registeredBus);
          B1ndToast.showSuccess("버스를 삭제하였습니다.");
        },
        onError: () => {
          B1ndToast.showError("버스를 삭제하지 못했습니다.");
        },
      });
    }
  };

  return {
    handleDeleteBusClick,
  };
};
