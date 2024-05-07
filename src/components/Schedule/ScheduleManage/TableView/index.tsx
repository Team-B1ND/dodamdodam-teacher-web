import { Button, TBody, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import { SCHEDULE_TABLE_ITEMS } from "components/Schedule/constant";
import TableAttribute from "components/common/TableAttribute";
import { useGetSchedulesQuery } from "queries/Schedule/schedule.query";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import dataTransform from "utils/Transform/dataTransform";
import { TRStyle } from "./style";

const TableView = () => {
  const { data: scheduleData, fetchNextPage } = useGetSchedulesQuery();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <TableAttribute
      constant={SCHEDULE_TABLE_ITEMS}
      thStyle={{ width: "10.5%" }}
    >
      <TBody>
        {scheduleData?.pages.map((page) =>
          page.data.map((schedule) => (
            <TR customStyle={TRStyle}>
              <TD customStyle={{ width: "11.5%" }}>
                <Button ButtonType="agree">
                  {schedule.type === "ACADEMIC" ? "학사 일정" : "휴일"}
                </Button>
              </TD>
              <TD customStyle={{ width: "11%" }}>{schedule.name}</TD>
              <TD customStyle={{ width: "10.5%" }}>
                {schedule.targetGrades.map((grade, idx) => (
                  <>
                    {dataTransform.scheduleTargetGradesTransform(grade)}
                    {idx !== schedule.targetGrades.length - 1 && ", "}
                  </>
                ))}
              </TD>
              <TD customStyle={{ width: "10.5%" }}>{schedule.place}</TD>

              <TD customStyle={{ width: "10.5%" }}>{schedule.date[0]} </TD>
              <TD customStyle={{ width: "10.5%" }}>{schedule.date[1]} </TD>
              <TD customStyle={{ width: "8.5%" }}>
                <Button
                  ButtonType="disagreed"
                  onClick={() => window.alert("개발중입니다.")}
                >
                  삭제
                </Button>
              </TD>
            </TR>
          ))
        )}
      </TBody>
      <div ref={ref}></div>
    </TableAttribute>
  );
};

export default TableView;
