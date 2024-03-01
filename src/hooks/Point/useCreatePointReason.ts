import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useCreatePointReasonMutation } from "queries/Point/query";
import { ChangeEvent, FormEvent, useState } from "react";

const useCreatePointReason = () => {
  const createPointReasonMutation = useCreatePointReasonMutation();
  const [pointReasonData, setPointReasonData] = useState({
    pointPlace: "DORMITORY",
    reason: "",
    score: "",
  });
  const [pointType, setPointType] = useState("");

  const onChangePointReasonData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPointReasonData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitPointReasonData = () => {
    createPointReasonMutation.mutate(
      { pointPlace: "DORMITORY", reason: "", score: "", type: "BONUS" },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("상벌점 사유 생성");
        },
      }
    );
  };
  return {
    setPointType,
    pointType,
    pointReasonData,
    onChangePointReasonData,
    onSubmitPointReasonData,
  };
};

export default useCreatePointReason;
