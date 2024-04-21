import { B1ndToast } from "@b1nd/b1nd-toastify";
import { QUERY_KEYS } from "queries/queryKey";
import { useQueryClient } from "react-query";
import { BusDateParam } from "repositories/Bus/BusRepository";
import { useDeleteBusMutation } from "../../queries/Bus/bus.query";
import { AxiosError } from "axios";

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
        onError: (error) => {
          const errorResponse = (error as AxiosError).response;
          B1ndToast.showError((errorResponse?.data as AxiosError).message);
        },
      });
    }
  };

  return {
    handleDeleteBusClick,
  };
};
