import { atom } from "recoil";

export const MemberSearch = atom<string>({
  key: "memberSearchAtom",
  default: "",
});

export const MemberSelectGrade = atom<string>({
  key: "memberSelectGradeAtom",
  default: "전체보기",
});
