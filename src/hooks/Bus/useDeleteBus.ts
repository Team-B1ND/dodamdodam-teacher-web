import { B1ndToast } from "@b1nd/b1nd-toastify";
import { QUERY_KEYS } from "queries/queryKey";
import { useQueryClient } from "react-query";
import { BusDateParam } from "repositories/Bus/BusRepository";
import { useDeleteBusMutation } from "../../queries/Bus/bus.query";

export const useDeleteBus = () => {
  const deleteBus = useDeleteBusMutation();
  const queryClient = useQueryClient();

  const handleDeleteBusClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    { busId, busDate }: { busId: number; busDate: BusDateParam }
  ) => {
    e.preventDefault();
    const answer = window.confirm("버스를 삭제하시겠습니까?");

    if (answer) {
      deleteBus.mutate(busId, {
        onSuccess: () => {
          queryClient.invalidateQueries(QUERY_KEYS.bus.busDate(busDate));
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
