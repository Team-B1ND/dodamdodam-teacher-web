import { atom } from "recoil";

export const SelectCategoryAtom = atom<number>({
  key: "selectCategoryAtom",
  default: 0,
});

export const SelectCategoryListAtom = atom<number[]>({
  key: "selectCategoryListAtom",
  default: [],
});
