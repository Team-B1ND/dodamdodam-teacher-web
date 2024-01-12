import { atom } from "recoil";
import { BusBasicInfoType, BusPassengerType } from "../../types/Bus/Bus.type";

export const BusPassengerDataAtom = atom<BusPassengerType | null>({
  key: "busPassengerDataAtom",
  default: null,
});

export const ExistingBusDataAtom = atom<BusBasicInfoType | null>({
  key: "existingBusDataAtom",
  default: null,
});
