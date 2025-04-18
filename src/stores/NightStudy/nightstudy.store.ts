import { atom } from "recoil";
import {NightStudyBanStatusType, NightStudyType} from "types/NightStudy/nightstudy.type";

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

export const NightStudySearchAtom = atom<string>({
  key: "NightStudySearchAtom",
  default: "",
})

export const NightStudySelectGradeAtom = atom<string>({
  key: "NightStudySelectGradeAtom",
  default: "전체보기",
});

export const NightStudySelectBanAtom = atom<string>({
  key: "NightStudySelectBanAtom",
  default: "정지여부",
});

export const NightStudyModalAtom = atom<NightStudyBanStatusType>({
  key: "NightStudyModalAtom",
  default: {isOpened: false, student: 0},
})