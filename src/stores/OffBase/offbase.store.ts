import { atom } from "recoil";

export const SelectGradeAtom = atom<string>({
  key: "SelectGradeAtom",
  default: "모든학년",
});

export const SelectApprovalAtom = atom<string>({
  key: "SelectApprovalAtom",
  default: "승인여부",
});

export const SelectMealDemand = atom<string>({
  key: "SelectMealDemand",
  default: "석식희망여부",
});

export const UploadDateAtom = atom<string>({
  key: "UploadDateAtom",
  default: "",
});

export const PassSelectIdAtom = atom<number[]>({
  key: "SelectIdAtom",
  default: [],
});

export const LeaveSelectIdAtom = atom<number[]>({
  key: "LeaveSelectIdAtom",
  default: [],
});
