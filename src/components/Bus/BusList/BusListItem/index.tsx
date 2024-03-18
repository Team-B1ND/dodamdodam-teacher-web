import { Button, TBody, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import { useOpenBusModal } from "hooks/Bus/useOpenBusModal";
import { useGetAllBusListQuery } from "queries/Bus/bus.query";
import convertDateTime from "utils/Time/convertDateTime";
import {
  CommonBusPassengerStyle,
  CommonBusTBody,
  CommonBusTR,
  NoneDataText,
} from "../../style";
import * as S from "./style";

const BusListItem = ({ page }: { page: number }) => {
  const busData = useGetAllBusListQuery(page, { suspense: true }).data?.data;
  const { handleOpenPassengerModal } = useOpenBusModal();

  return (
    <TBody customStyle={CommonBusTBody}>
      {busData?.length! > 0 ? (
        busData?.map((item) => (
          <TR customStyle={CommonBusTR}>
            <TD customStyle={S.BusTD}>{item.bus.busName}</TD>

            <TD customStyle={S.BusTD}>{item.bus.description}</TD>

            <TD customStyle={S.BusLeaveTime}>
              <p>
                {convertDateTime.getDateTime(
                  new Date(item.bus.leaveTime),
                  "date"
                )}
              </p>
              <p>
                {convertDateTime.getDateTime(
                  new Date(item.bus.leaveTime),
                  "time"
                )}
              </p>
            </TD>

            <TD customStyle={S.BusTD}>
              {convertDateTime.getTimeRequired(item.bus.timeRequired)}
            </TD>

            <TD customStyle={S.BusTD}>
              {item.members.length} / {item.bus.peopleLimit}명
            </TD>

            <TD customStyle={S.BusTD}>
              <Button
                ButtonType="agree"
                style={CommonBusPassengerStyle}
                onClick={() =>
                  handleOpenPassengerModal(
                    `${convertDateTime.getDateTime(
                      new Date(item.bus.leaveTime),
                      "date"
                    )}
                ${item.bus.busName}`,
                    item.members
                  )
                }
              >
                탑승자
              </Button>
            </TD>
          </TR>
        ))
      ) : (
        <NoneDataText>조회할 버스정보가 없습니다</NoneDataText>
      )}
    </TBody>
  );
};

export default BusListItem;
