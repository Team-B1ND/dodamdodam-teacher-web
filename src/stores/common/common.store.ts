import { atom } from "recoil";

export const HideHeaderAtom = atom<boolean>({
  key: "HideHeaderAtom",
  default: false,
});

export const HideSidebarAtom = atom<boolean>({
  key: "HideSidebarAtom",
  default: false,
});
