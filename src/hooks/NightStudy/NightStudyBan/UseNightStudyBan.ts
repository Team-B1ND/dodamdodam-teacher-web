import {useState} from "react";
import dayjs from "dayjs";
import {useQueryClient} from "react-query";
import {useCreatePointReasonMutation} from "queries/NightStudy/nightstudy.query";
import {QUERY_KEYS} from "../../../queries/queryKey";
import {B1ndToast} from "@b1nd/b1nd-toastify";
import {AxiosError} from "axios";

interface NightStudyBanState {
  ended: string,
  reasonType: string,
  reason: string
}

const UseNightStudyBan = ()=> {
  const [ended, setEnded] = useState<string>(dayjs().format("YYYY-MM-DD"));
  const [reasonType, setReasonType] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const state: NightStudyBanState = {ended, reasonType, reason};
  const queryClient = useQueryClient();
  const createNightStudyBan = useCreatePointReasonMutation();

  const onCreateNightStudyBan = (student: number) => {
    const banReason = reasonType === "기타"? reason: reasonType;

    createNightStudyBan.mutate({student, reason: banReason, ended}, {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.nightstudy.getNightStudyBanMember);
        B1ndToast.showSuccess(`심자가 정지 되었습니다. (~${ended})`);
      },
      onError: (error) => {
        const errorResponse = (error as AxiosError).response;
        B1ndToast.showError((errorResponse?.data as AxiosError).message);
      }
    })
  }

  return {
    state,
    setEnded,
    setReasonType,
    setReason,
    onCreateNightStudyBan
  }
}

export default UseNightStudyBan;