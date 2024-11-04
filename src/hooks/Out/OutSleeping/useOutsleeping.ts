import { B1ndToast } from "@b1nd/b1nd-toastify";
import {
  useGetTodayOutSleepingQuery,
  usePatchSleepingApproval,
  usePatchSleepingApprovalCancel,
  usePatchSleepingCancel,
} from "queries/OutSleeping/outsleeping.query";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "queries/queryKey";
import { useRecoilState } from "recoil";
import { UploadDateAtom } from "stores/Out/out.store";
import { useEffect, useState } from "react";
import { OutListType } from "types/Out/out.type";

const useOutSleeping = () => {
  const queryClient = useQueryClient();
  const patchLeaveApproval = usePatchSleepingApproval();
  const patchLeaveCancel = usePatchSleepingCancel();
  const patchLeaveApprovalCancel = usePatchSleepingApprovalCancel();
  const { data: offBaseLeave } = useGetTodayOutSleepingQuery();

  const [uploadDate] = useRecoilState<string>(UploadDateAtom);

  const handleOffBaseLeave = (outId: number, query: any) => {
    query.mutate(outId, {
      onSuccess: () => {
        if (query === patchLeaveApproval) B1ndToast.showSuccess("외박 승인 성공");

        if (query === patchLeaveCancel) B1ndToast.showSuccess("외박 거절 성공");

        if (query === patchLeaveApprovalCancel) B1ndToast.showSuccess("외박 승인 취소 성공");

        queryClient.invalidateQueries(QUERY_KEYS.outsleeping.getOutSleeping(uploadDate));
      },
      onError: () => {
        console.log("외박 승인 실패");
      },
    });
  };

  const [leaveStudentList, setLeaveStudentList] = useState([
    {
      이름: "",
      반번호: "",
      사유: "",
      비고: "",
    },
  ]);

  useEffect(() => {
    if (offBaseLeave?.data) {
      const newData = offBaseLeave.data.map((data: OutListType) => ({
        이름: data.student.name,
        반번호: `${data.student.grade}학년 ${data.student.room}반 ${data.student.number}번`,
        사유: data.reason.substring(0, 11),
        비고: "",
      }));
      setLeaveStudentList(newData);
    }
  }, [offBaseLeave]);

  return {
    handleOffBaseLeave,
    patchLeaveApproval,
    patchLeaveCancel,
    patchLeaveApprovalCancel,
    leaveStudentList,
  };
};
export default useOutSleeping;
