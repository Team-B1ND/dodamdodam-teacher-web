import { atom } from "recoil";

export const HideHeaderAtom = atom<boolean>({
  key: "HideHeaderAtom",
  default: true,
});

export const HideSidebarAtom = atom<boolean>({
  key: "HideSidebarAtom",
  default: true,
});
