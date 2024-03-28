import * as S from "./style";
import ScheduleManageHeader from "./ScheduleHeader";
import { useState } from "react";
import CalendarView from "./CalendarView";
import TableView from "./TableView";

export type viewingType = "calendar" | "table";

const ScheduleManage = () => {
  const [viewingPoint, setViewingPoint] = useState<viewingType>("calendar");

  return (
    <S.ScheduleManageContainer>
      <ScheduleManageHeader
        viewingPoint={viewingPoint}
        setViewingPoint={setViewingPoint}
      />
      {viewingPoint === "calendar" ? <CalendarView /> : <TableView />}
    </S.ScheduleManageContainer>
  );
};

export default ScheduleManage;
