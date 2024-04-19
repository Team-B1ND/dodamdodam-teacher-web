import { atom } from "recoil";
import { BusBasicInfoType, BusPassengerType } from "types/Bus/bus.type";
import { recoilPersist } from "recoil-persist";
import convertDateTime from "utils/Time/ConvertDateTime";

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

export const SelectBusDateAtom = atom<string>({
  key: "selectBusDateAtom",
  default: convertDateTime.parseDesiredDateTime(new Date(), "YYYY-MM-DD"),
});
