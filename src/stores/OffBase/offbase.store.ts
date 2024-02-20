import { atom } from "recoil";

export const SelectGradeAtom = atom<string>({
  key: "SelectGradeAtom",
  default: "모든학년",
});

export const SelectApprovalAtom = atom<string>({
  key: "SelectApprovalAtom",
  default: "전체보기",
});

export const StudentNameAtom = atom<string>({
  key: "StudentNameAtom",
  default: "",
});

export const UploadDateAtom = atom<string>({
  key: "UploadDateAtom",
  default: "",
});
