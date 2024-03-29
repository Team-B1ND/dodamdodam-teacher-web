import { atom } from "recoil";

export const PointSelectGrade = atom<string>({
  key: "pointSelectGradeAtom",
  default: "전체보기",
});

export const PointSelectRoom = atom<string>({
  key: "pointSelectRoomAtom",
  default: "전체보기",
});

export const PointStduentSearch = atom<string>({
  key: "pointStduentSearchAtom",
  default: "",
});
