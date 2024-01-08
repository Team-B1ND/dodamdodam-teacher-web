import { Button, TBody, TD, TR } from "@b1nd/b1nd-dodam-ui";
import * as S from "./style";
import { useGetRegisteredBusQuery } from "../../../../queries/Bus/bus.query";
import convertTime from "../../../../utils/Time/convertTime";

const BusManagementItem = ({ busName }: { busName: string }) => {
  const { data } = useGetRegisteredBusQuery({ suspense: true });

  const searchBusInfo = data?.data.busList.map((bus) => ({
    ...bus,
    bus: bus.bus.filter((item) => item.busName.includes(busName)),
  }));

  return (
    <TBody customStyle={S.BusTBody}>
      {searchBusInfo?.map((bus) =>
        bus.bus.map((item) => (
          <TR key={item.idx} customStyle={S.BusTR}>
            <TD customStyle={S.BusTD}>{item.busName}</TD>
            <TD customStyle={S.BusTD}>{item.description}</TD>
            <TD customStyle={S.BusLeaveTime}>
              <p>{convertTime.getDateTime(new Date(item.leaveTime), "date")}</p>
              <p>{convertTime.getDateTime(new Date(item.leaveTime), "time")}</p>
            </TD>
            <TD customStyle={S.BusTD}>
              {convertTime.getTimeRequired(item.timeRequired)} 소요
            </TD>
            <TD customStyle={S.BusTD}>
              {item.busMember.length} / {item.peopleLimit}명
            </TD>
            <TD customStyle={S.BusTD}>
              <Button type="agree" style={S.PassengerStyle}>
                탑승자
              </Button>
            </TD>
            <TD customStyle={S.ButtonContainerStyle}>
              <Button type="agree" style={S.EditStyle}>
                수정
              </Button>
              <Button type="disagree" style={S.DelStyle}>
                삭제
              </Button>
            </TD>
          </TR>
        ))
      )}
    </TBody>
  );
};

export default BusManagementItem;
