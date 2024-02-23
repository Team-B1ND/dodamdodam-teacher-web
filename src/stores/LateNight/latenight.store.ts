import { atom } from "recoil";

export const LateNightGrade = atom<string>({
  key: "LateNightGrade",
  default: "모든학년",
});
