import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useOverlay } from "@toss/use-overlay";
import { useSetRecoilState } from "recoil";
import BusPassenger from "../../components/Bus/BusModal/BusPassenger";
import BusRegister from "../../components/Bus/BusModal/BusRegister";
import {
  BusPassengerDataAtom,
  ExistingBusDataAtom,
} from "../../stores/Bus/bus.store";
import { BusMemberType } from "../../types/Bus/Bus.type";

export const useOpenBusModal = () => {
  const busFormOverlay = useOverlay();
  const setExistingBusData = useSetRecoilState(ExistingBusDataAtom);
  const setBusPassengerData = useSetRecoilState(BusPassengerDataAtom);

  // 버스 등록, 수정 모달 및 탑승자 모달 여는 함수
  const openBusModalOverlay = (
    modal: { type: "register"; busId: number } | { type: "passenger" }
  ) => {
    return new Promise((resolve) => {
      busFormOverlay.open(({ isOpen, close }) =>
        modal.type === "register" ? (
          <BusRegister
            busId={modal.busId}
            isOpen={isOpen}
            close={() => {
              close();
              modal.busId && setExistingBusData(null);
              resolve(true);
            }}
          />
        ) : (
          <BusPassenger
            isOpen={isOpen}
            close={() => {
              close();
              resolve(true);
            }}
          />
        )
      );
    });
  };

  // 버스 추가, 수정 모달을 여는 함수
  const handleOpenRegisterModal = (busId?: number) => {
    openBusModalOverlay({ type: "register", busId: busId! });
  };

  // 버스탑승자 모달을 여는 함수
  const handleOpenPassengerModal = (
    busName: string,
    busMember: BusMemberType[]
  ) => {
    if (busMember.length > 0) {
      setBusPassengerData((prev) => ({
        ...prev,
        busName: busName,
        busMember: busMember,
      }));
      openBusModalOverlay({ type: "passenger" });
    } else {
      B1ndToast.showInfo("현재 버스 탑승 인원이 없습니다.");
    }
  };

  return {
    openBusModalOverlay,

    handleOpenRegisterModal,
    handleOpenPassengerModal,
  };
};
