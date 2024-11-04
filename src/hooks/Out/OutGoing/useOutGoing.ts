import { B1ndToast } from "@b1nd/b1nd-toastify";
import {
  useGetOutGoingQuery,
  usePatchApproval,
  usePatchApprovalCancel,
  usePatchCancel,
} from "queries/OutGoing/outgoing.query";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "queries/queryKey";
import { useRecoilState } from "recoil";
import { UploadDateAtom } from "stores/OffBase/offbase.store";
import { useEffect, useState } from "react";
import { OutListType } from "types/OffBasePass/offbasepass.type";
import ConvertDateTime from "utils/Time/ConvertDateTime";

const useOutGoing = () => {
  const queryClient = useQueryClient();
  const patchApprovals = usePatchApproval();
  const patchApprovalCancel = usePatchApprovalCancel();
  const patchCancel = usePatchCancel();
  const [uploadDate] = useRecoilState<string>(UploadDateAtom);

  const { data: OffBasePass } = useGetOutGoingQuery(uploadDate);

  const handleOffBasePass = (id: number, query: any) => {
    query.mutate(id, {
      onSuccess: () => {
        switch (query) {
          case patchApprovals:
            B1ndToast.showSuccess("외출 승인 성공");
            break;
          case patchApprovalCancel:
            B1ndToast.showSuccess("외출 승인 취소 성공");
            break;
          case patchCancel:
            B1ndToast.showSuccess("외출 거절 성공");
            break;
          default:
            break;
        }

        queryClient.invalidateQueries(QUERY_KEYS.outgoing.getOutGOing(uploadDate));
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
        도착시간: `${ConvertDateTime.getDateTime(new Date(data.endAt), "time")}`,
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

export default useOutGoing;
