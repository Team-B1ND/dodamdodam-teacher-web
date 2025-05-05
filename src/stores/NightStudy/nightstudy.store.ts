import { atom } from "recoil";
import { NightStudyType } from "types/NightStudy/nightstudy.type";

export const NightStudyGrade = atom<string>({
  key: "NightStudyGrade",
  default: "모든학년",
});

export const NightStudyDataAtom = atom<NightStudyType | null>({
  key: "NightStudyDataAtom",
  default: null,
});

export const NightStudySelectIdAtom = atom<number[]>({
  key: "NightStudySelectIdAtom",
  default: [],
});