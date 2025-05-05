import {useQueryClient} from "react-query";
import {useDeleteNightStudyBan} from "queries/NightStudy/nightstudy.query";
import {QUERY_KEYS} from "queries/queryKey";
import {B1ndToast} from "@b1nd/b1nd-toastify";
import {AxiosError} from "axios";

const useNightStudyBanCancel = () => {
  const queryClient = useQueryClient();
  const deleteNightStudyBan = useDeleteNightStudyBan();

  const onDeleteNightStudyBan = (
    id: number
  ) => {
    deleteNightStudyBan.mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.nightstudy.getNightStudyBanMember);
        B1ndToast.showSuccess("심자 정지가 헤제 되었습니다.");
      },
      onError: (error) => {
        const errorResponse = (error as AxiosError).response;
        B1ndToast.showError((errorResponse?.data as AxiosError).message);
      },
    })
  }
  return { onDeleteNightStudyBan };
}

export default useNightStudyBanCancel;