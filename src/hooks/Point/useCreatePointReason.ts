import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useCreatePointReasonMutation } from "queries/Point/query";
import { QUERY_KEYS } from "queries/queryKey";
import { ChangeEvent, useState } from "react";
import { useQueryClient } from "react-query";
import { CreatePointReasonParam } from "repositories/Point/PointRepository";
import { PointType } from "types/Point/types";

const useCreatePointReason = () => {
  const queryClinet = useQueryClient();
  const createPointReasonMutation = useCreatePointReasonMutation();
  const [pointReasonData, setPointReasonData] = useState<
    Omit<CreatePointReasonParam, "scoreType" | "pointType">
  >({
    reason: "",
    score: 0,
  });
  const [scoreType, setScoreType] = useState("");

  const onChangePointReasonData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPointReasonData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitPointReasonData = (pointType: PointType) => {
    const { reason, score } = pointReasonData;

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
          queryClinet.invalidateQueries(QUERY_KEYS.point.getReasons(pointType));
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
