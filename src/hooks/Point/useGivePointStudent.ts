import { useState } from "react";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useGivePointStudentQuery } from "queries/Point/query";
import { PointValueType } from "types/Point/types";

const useGivePointStudent = () => {
  const mutation = useGivePointStudentQuery();

  const [studentIds, setStudentIds] = useState<number[]>([]);

  const onSetStudentList = (id: number) => {
    if (studentIds.includes(id)) {
      setStudentIds(studentIds.filter((item) => item !== id));
    } else {
      setStudentIds((prev) => [...prev, id]);
    }
  };

  const onSubmitGivePointStudent = (
    reasonId: number,
    reasonType: PointValueType,
    reason: string
  ) => {
    const issueAt = window.prompt("빌급할 날짜를 입력해주세요 ex)2024-12-12")!;
    if (issueAt) {
      mutation.mutate(
        {
          issueAt,
          reasonId,
          studentIds,
        },
        {
          onSuccess: () => {
            B1ndToast.showSuccess(
              `${reason} 사유로 ${
                reasonType === "BONUS"
                  ? "상점"
                  : reasonType === "MINUS"
                  ? "벌점"
                  : "상쇄점"
              }이 부여 되었습니다`
            );
          },
          onError: () => {
            B1ndToast.showError("서버에러...");
          },
        }
      );
    } else return;
  };
  return {
    studentIds,
    onSetStudentList,
    onSubmitGivePointStudent,
  };
};

export default useGivePointStudent;
