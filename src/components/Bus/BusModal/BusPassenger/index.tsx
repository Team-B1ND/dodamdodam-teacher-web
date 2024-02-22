import { Portal } from "components/common/Portal";
import passengerList from "assets/icons/Bus/passengerList.svg";
import * as S from "../style";
import {
  BusPassengerItemContainer,
  BusPassengerWrap,
  CsvButtonContainer,
} from "./style";
import BusPassengerItem from "./BusPassengerItem";
import CsvButton from "components/common/ExtractCsvData";
import { useBusPassenger } from "hooks/Bus/useBusPassenger";

interface Props {
  isOpen: boolean;
  close: () => void;
}

const BusPassenger = ({ isOpen, close }: Props) => {
  const { busPassengerInfo, busPassengerData } = useBusPassenger(close);

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
