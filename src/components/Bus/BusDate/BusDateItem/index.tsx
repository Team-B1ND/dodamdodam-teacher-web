import { Button, TBody, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import { useGetBusDateQuery } from "../../../../queries/Bus/Bus.query";
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

interface Props {
  handleConvertToBusParamFormat: () => BusDateParam;
}

const BusDateItem = ({ handleConvertToBusParamFormat }: Props) => {
  const dateBusData = useGetBusDateQuery(handleConvertToBusParamFormat(), {
    suspense: true,
  }).data?.data.bus;

  const { handleOpenPassengerModal } = useOpenBusModal();

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
