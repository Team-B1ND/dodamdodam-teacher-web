import { atom } from "recoil";
import { LateNightType } from "types/LateNight/latenight.type";

export const LateNightGrade = atom<string>({
  key: "LateNightGrade",
  default: "모든학년",
});

export const LateNightDataAtom = atom<LateNightType | null>({
  key: "LateNightDataAtom",
  default: null,
});
