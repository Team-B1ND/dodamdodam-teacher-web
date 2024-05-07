import { B1ndToast } from "@b1nd/b1nd-toastify";
import {
  useGetOffBasePassQuery,
  usePatchApproval,
  usePatchApprovalCancel,
  usePatchCancel,
} from "../../../queries/OffBasePass/offbasepass.query";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "../../../queries/queryKey";
import { useRecoilState } from "recoil";
import { UploadDateAtom } from "../../../stores/OffBase/offbase.store";
import { useEffect, useState } from "react";
import { OutListType } from "types/OffBasePass/offbasepass.type";
import ConvertDateTime from "utils/Time/ConvertDateTime";

const useOffBasePass = () => {
  const queryClient = useQueryClient();
  const patchApprovals = usePatchApproval();
  const patchApprovalCancel = usePatchApprovalCancel();
  const patchCancel = usePatchCancel();
  const [uploadDate] = useRecoilState<string>(UploadDateAtom);

  const { data: OffBasePass } = useGetOffBasePassQuery(uploadDate);

  const handleOffBasePass = (id: number, query: any) => {
    query.mutate(id, {
      onSuccess: () => {
        if (query === patchApprovals) B1ndToast.showSuccess("외출 승인 성공");

        if (query === patchApprovalCancel)
          B1ndToast.showSuccess("외출 승인 취소 성공");

        if (query === patchCancel) B1ndToast.showSuccess("외출 거절 성공");

        queryClient.invalidateQueries(
          QUERY_KEYS.offbasepass.getOffBasePass(uploadDate)
        );
      },
      onError: () => {
        B1ndToast.showError("실패");
      },
    });
  };

  const [offbaseInfo, setOffBaseInfo] = useState({
    data: [
      {
        이름: "",
        반번호: "",
        도착시간: "",
        비고: "",
      },
    ],
    length: 0,
  });

  useEffect(() => {
    if (OffBasePass?.data) {
      const newData = OffBasePass.data.map((data: OutListType) => ({
        이름: data.student.name,
        반번호: `${data.student.grade}학년 ${data.student.room}반 ${data.student.number}번`,
        도착시간: `${ConvertDateTime.getDateTime(
          new Date(data.endAt),
          "time"
        )}`,
        비고: "",
      }));
      setOffBaseInfo({ data: newData, length: OffBasePass.data.length });
    }
  }, [OffBasePass]);

  return {
    handleOffBasePass,
    patchApprovals,
    patchApprovalCancel,
    patchCancel,
    offbaseInfo,
  };
};

export default useOffBasePass;
