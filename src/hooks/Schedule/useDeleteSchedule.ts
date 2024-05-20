import { B1ndToast } from "@b1nd/b1nd-toastify";
import { AxiosError } from "axios";
import { useDeleteSchedulesMutation } from "queries/Schedule/schedule.query";
import { QUERY_KEYS } from "queries/queryKey";
import { useQueryClient } from "react-query";

const useDeleteSchedule = () => {
  const deleteSchedulesMutation = useDeleteSchedulesMutation();
  const queryClient = useQueryClient();

  const onDeleteSchedule = (id: number) => {
    deleteSchedulesMutation.mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.schedule.getSchedules);
        B1ndToast.showSuccess("일정이 삭제 되었습니다.");
      },
      onError: (error) => {
        const errorResponse = (error as AxiosError).response;
        B1ndToast.showError((errorResponse?.data as AxiosError).message);
      },
    });
  };

  return { onDeleteSchedule };
};

export default useDeleteSchedule;
