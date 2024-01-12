import useEscCloseModal from "../../../../hooks/common/useEscCloseModal";
import useLockScroll from "../../../../hooks/common/useLockScroll";
import { Portal } from "../../../common/Portal";
import passengerList from "../../../../assets/icons/Bus/passengerList.svg";
import * as S from "../style";
import {
  BusPassengerItemContainer,
  BusPassengerWrap,
  CsvButtonContainer,
} from "./style";
import BusPassengerItem from "./BusPassengerItem";
import { useRecoilValue } from "recoil";
import { BusPassengerDataAtom } from "../../../../stores/Bus/bus.store";
import { useEffect, useState } from "react";
import { addPhoneHyphen } from "../../../../utils/common/addPhoneHyphen";
import CsvButton from "../../../common/ExtractCsvData";

interface Props {
  isOpen: boolean;
  close: () => void;
}

const BusPassenger = ({ isOpen, close }: Props) => {
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

  useLockScroll();
  useEscCloseModal(close);

  // csv에 보여질 데이터 값 담기
  useEffect(() => {
    const busPassengerCsvData = busPassengerData?.busMember.map((item) => ({
      이름: item.name,
      아이디: item.memberId,
      전화번호: addPhoneHyphen(item.phone),
      탑승버스: busPassengerData?.busName,
      비고: "",
    }));
    setBusPassengerInfo(busPassengerCsvData!!);
  }, [busPassengerData]);

  return (
    <Portal>
      {isOpen && (
        <S.BusModalContainer onClick={close}>
          <BusPassengerWrap onClick={(e) => e.stopPropagation()}>
            <S.TitleContainer>
              <S.Title>
                <img src={passengerList} alt="스쿨버스" />
                <p>버스 탑승자 명단</p>
              </S.Title>
              <S.CloseIcon size={32} onClick={close} />
            </S.TitleContainer>

            <BusPassengerItemContainer>
              <BusPassengerItem busPassengerData={busPassengerData!} />
            </BusPassengerItemContainer>

            <CsvButtonContainer>
              <CsvButton
                csvData={busPassengerInfo}
                fileName={busPassengerData?.busName!}
              />
            </CsvButtonContainer>
          </BusPassengerWrap>
        </S.BusModalContainer>
      )}
    </Portal>
  );
};

export default BusPassenger;
