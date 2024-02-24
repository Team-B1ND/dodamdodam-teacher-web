import { atom } from "recoil";
import { BusBasicInfoType, BusPassengerType } from "types/Bus/bus.type";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const BusPassengerDataAtom = atom<BusPassengerType | null>({
  key: "busPassengerDataAtom",
  default: null,
});

export const ExistingBusDataAtom = atom<BusBasicInfoType | null>({
  key: "existingBusDataAtom",
  default: null,
});

export const BusListPageAtom = atom<number>({
  key: "busListPageAtom",
  default: 1,
  effects_UNSTABLE: [persistAtom],
});
