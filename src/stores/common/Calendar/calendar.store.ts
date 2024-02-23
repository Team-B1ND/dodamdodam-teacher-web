import { atom } from "recoil";

export const uploadDateAtom = atom<string>({
  key: "uploadDateAtom",
  default: "",
});
