import { atom } from "recoil";

export const SelectCategoryAtom = atom<string>({
  key: "selectCategoryAtom",
  default: "",
});

export const SelectCategoryListAtom = atom<string[]>({
  key: "selectCategoryListAtom",
  default: [""],
});
