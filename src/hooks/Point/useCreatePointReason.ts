import { B1ndToast } from "@b1nd/b1nd-toastify";
import { AxiosError } from "axios";
import { useCreatePointReasonMutation } from "queries/Point/point.query";
import { QUERY_KEYS } from "queries/queryKey";
import { ChangeEvent, useState } from "react";
import { useQueryClient } from "react-query";
import { CreatePointReasonParam } from "repositories/Point/point.repository";
import { PointType, PointValueKoreanType } from "types/Point/point.type";
import { pointTypeFormatToEnglish } from "utils/Point/pointFormat";

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
        scoreType: pointTypeFormatToEnglish(scoreType as PointValueKoreanType)!,
      },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("상벌점 사유 생성");
          setPointReasonData({
            reason: "",
            score: 0,
          });
          setScoreType("");
          queryClinet.invalidateQueries(QUERY_KEYS.point.getReasons(pointType));
        },
        onError: (error) => {
          const errorResponse = (error as AxiosError).response;
          B1ndToast.showError((errorResponse?.data as AxiosError).message);
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
