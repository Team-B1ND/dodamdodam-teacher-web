import { atom } from "recoil";

export const SelectGradeAtom = atom<string>({
  key: "SelectGradeAtom",
  default: "모든학년",
});

export const SelectApprovalAtom = atom<string>({
  key: "SelectApprovalAtom",
  default: "승인 여부",
});

export const UploadDateAtom = atom<string>({
  key: "UploadDateAtom",
  default: "",
});

export const SelectIdAtom = atom<number>({
  key: "SelectIdAtom",
  default: 0,
});
