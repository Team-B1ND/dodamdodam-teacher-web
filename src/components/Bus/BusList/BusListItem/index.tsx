import { Button, TBody, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import { useOpenBusModal } from "../../../../hooks/Bus/useOpenBusModal";
import { useGetAllBusListQuery } from "../../../../queries/Bus/Bus.query";
import convertTime from "../../../../utils/Time/convertTime";
import {
  CommonBusPassengerStyle,
  CommonBusTBody,
  CommonBusTR,
  NoneDataText,
} from "../../style";
import * as S from "./style";

const BusListItem = ({ page }: { page: number }) => {
  const { data } = useGetAllBusListQuery(page, { suspense: true });
  const busData = data?.data.bus;
  const { handleOpenPassengerModal } = useOpenBusModal();

  return (
    <TBody customStyle={CommonBusTBody}>
      {busData?.length! > 0 ? (
        busData?.map((item) => (
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
              {item.busMember.length} / {item.peopleLimit}명
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

export default BusListItem;
