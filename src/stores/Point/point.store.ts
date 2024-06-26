import { atom } from "recoil";

export const PointSelectGrade = atom<string>({
  key: "pointSelectGradeAtom",
  default: "전체보기",
});

export const PointSelectRoom = atom<string>({
  key: "pointSelectRoomAtom",
  default: "모든 학반",
});

export const PointStduentSearch = atom<string>({
  key: "pointStduentSearchAtom",
  default: "",
});

export const PointStudentIdsAtom = atom<number[]>({
  key: "pointStudentIdsAtom",
  default: [],
});

export const PointSelectedStudentInfoAtom = atom<string[]>({
  key: "pointSelectedStudentInfoAtom",
  default: [],
});
