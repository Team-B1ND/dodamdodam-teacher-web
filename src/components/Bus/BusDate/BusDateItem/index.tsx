import { Button, TBody, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import { useGetBusDateQuery } from "../../../../queries/Bus/bus.query";
import { BusDateParam } from "../../../../repositories/Bus/BusRepository";
import convertTime from "../../../../utils/Time/convertTime";
import { useOpenBusModal } from "../../../../hooks/Bus/useOpenBusModal";
import * as S from "./style";
import {
  CommonBusPassengerStyle,
  CommonBusTBody,
  CommonBusTR,
  NoneDataText,
} from "../../style";
import { ExistingBusDataAtom } from "stores/Bus/bus.store";
import { useSetRecoilState } from "recoil";
import { useDeleteBus } from "hooks/Bus/useDeleteBus";

interface BusDateItemProps {
  handleConvertToBusParamFormat: () => BusDateParam;
}

const BusDateItem = ({ handleConvertToBusParamFormat }: BusDateItemProps) => {
  const dateBusData = useGetBusDateQuery(handleConvertToBusParamFormat(), {
    suspense: true,
  }).data?.data.bus;

  const setExistingBusData = useSetRecoilState(ExistingBusDataAtom);
  const { handleOpenPassengerModal, handleOpenBusRegisterModal } =
    useOpenBusModal();
  const { handleDeleteBusClick } = useDeleteBus();

  return (
    <TBody customStyle={CommonBusTBody}>
      {dateBusData?.length! > 0 ? (
        dateBusData?.map((item) => (
          <TR customStyle={CommonBusTR}>
            <TD customStyle={S.BusTD}>{item.busName}</TD>

            <TD customStyle={S.BusTD}>{item.description}</TD>

            <TD customStyle={S.BusLeaveTime}>
              <p>{convertTime.getDateTime(new Date(item.leaveTime), "date")}</p>
              <p>{convertTime.getDateTime(new Date(item.leaveTime), "time")}</p>
            </TD>

            <TD customStyle={S.BusTD}>
              {convertTime.getTimeRequired(item.timeRequired)}
            </TD>

            <TD customStyle={S.BusTD}>
              {item.applyCount} / {item.peopleLimit}명
            </TD>

            <TD customStyle={S.BusTD}>
              <Button
                ButtonType="agree"
                style={CommonBusPassengerStyle}
                onClick={() =>
                  handleOpenPassengerModal(
                    `${convertTime.getDateTime(
                      new Date(item.leaveTime),
                      "date"
                    )}
                    ${item.busName}`,
                    item.busMember
                  )
                }
              >
                탑승자
              </Button>
            </TD>
            <TD customStyle={S.BusTD}>용산역</TD>

            <TD customStyle={S.BusTD}>도담테스트</TD>

            <TD customStyle={S.BusLeaveTime}>
              <p>2024년 3월 9일</p>
              <p>13시 20분</p>
            </TD>

            <TD customStyle={S.BusTD}>1시간 소요</TD>

            <TD customStyle={S.BusTD}>5 / 50명</TD>

            <TD customStyle={S.BusTD}>
              <Button ButtonType="agree" style={CommonBusPassengerStyle}>
                탑승자
              </Button>
            </TD>

            <TD customStyle={S.ButtonContainerStyle}>
              {new Date() < new Date(item.leaveTime) && (
                <Button
                  ButtonType="agree"
                  style={S.EditStyle}
                  onClick={() => {
                    setExistingBusData(item);
                    handleOpenBusRegisterModal(item.id);
                  }}
                >
                  수정
                </Button>
              )}
              <Button
                ButtonType="disagree"
                style={S.DelStyle}
                onClick={(e) => handleDeleteBusClick(e, item.id)}
              >
                삭제
              </Button>
            </TD>
          </TR>
        ))
      ) : (
        <NoneDataText>
          선택하신 날짜에 해당하는 버스정보가 없습니다.
        </NoneDataText>
      )}
    </TBody>
  );
};

export default BusDateItem;
