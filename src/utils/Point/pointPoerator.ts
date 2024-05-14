import { PointValueType } from "types/Point/types";

export const PointTypeFormatToKorean = (scoreType: PointValueType) => {
  return scoreType === "BONUS"
    ? "상점"
    : scoreType === "MINUS"
    ? "벌점"
    : "상쇄점";
};
export const PointTypeFormatToEnglish = (scoreType: string) => {
  return scoreType === "상점"
    ? "BONUS"
    : scoreType === "벌점"
    ? "MINUS"
    : "OFFSET";
};
