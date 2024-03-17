import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useCreatePointReasonMutation } from "queries/Point/query";
import { ChangeEvent, useState } from "react";
import { CreatePointReasonParam } from "repositories/Point/PointRepository";

const useCreatePointReason = () => {
  const createPointReasonMutation = useCreatePointReasonMutation();
  const [pointReasonData, setPointReasonData] = useState<
    Omit<CreatePointReasonParam, "scoreType">
  >({
    pointType: "DORMITORY",
    reason: "",
    score: 0,
  });
  const [scoreType, setScoreType] = useState("");

  const onChangePointReasonData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPointReasonData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitPointReasonData = () => {
    const { pointType, reason, score } = pointReasonData;

    createPointReasonMutation.mutate(
      {
        pointType,
        reason,
        score: Number(score),
        scoreType: scoreType === "상점" ? "BONUS" : "벌점" ? "MINUS" : "OFFSET",
      },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("상벌점 사유 생성");
        },
      }
    );
  };
  return {
    scoreType,
    setScoreType,
    pointReasonData,
    onChangePointReasonData,
    onSubmitPointReasonData,
  };
};

export default useCreatePointReason;
