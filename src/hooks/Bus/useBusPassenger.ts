import useEscCloseModal from "hooks/common/useEscCloseModal";
import useLockScroll from "hooks/common/useLockScroll";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { BusPassengerDataAtom } from "stores/Bus/bus.store";
import { addPhoneHyphen } from "utils/common/addPhoneHyphen";

export const useBusPassenger = (closeModal: () => void) => {
  useLockScroll();
  useEscCloseModal(closeModal);

  const busPassengerData = useRecoilValue(BusPassengerDataAtom);
  const [busPassengerInfo, setBusPassengerInfo] = useState([
    {
      이름: "",
      아이디: "",
      전화번호: "",
      탑승버스: "",
      비고: "",
    },
  ]);

  // csv에 보여질 데이터 값 담기
  useEffect(() => {
    const busPassengerCsvData = busPassengerData?.busMember.map((item) => ({
      이름: item.name,
      아이디: item.memberId,
      전화번호: addPhoneHyphen(item.phone),
      탑승버스: busPassengerData?.busName,
      비고: "",
    }));
    setBusPassengerInfo(busPassengerCsvData!);
  }, [busPassengerData]);

  return {
    busPassengerData,
    busPassengerInfo,
  };
};
