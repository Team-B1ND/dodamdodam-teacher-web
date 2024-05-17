import {
  PointValueEnglishType,
  PointValueKoreanType,
} from "types/Point/point.type";

export const coverPointTypeToKorean = (scoreType: PointValueEnglishType) => {
  switch (scoreType) {
    case "BONUS":
      return "상점";
    case "MINUS":
      return "벌점";
    case "OFFSET":
      return "상쇄점";
  }
};
export const coverPointTypeToEnglish = (scoreType: PointValueKoreanType) => {
  switch (scoreType) {
    case "상점":
      return "BONUS";
    case "벌점":
      return "MINUS";
    case "상쇄점":
      return "OFFSET";
  }
};
