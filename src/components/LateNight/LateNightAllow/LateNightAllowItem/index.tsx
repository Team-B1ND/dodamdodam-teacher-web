import * as S from "./style";
import { TBody, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import { useGetPendingLateNight } from "../../../../queries/LateNight/latenight.query";

interface LateNightAllowProps {
  studentName: string;
  lateNightGrade: number;
}

const LateNightAllowItem = ({
  studentName,
  lateNightGrade,
}: LateNightAllowProps) => {
  const { data: lateNightAllow } = useGetPendingLateNight();

  const LateNightAllFilter = lateNightAllow?.data
    .filter((data) => data.student.name.includes(studentName))
    .filter(
      (data) => data.student.grade === lateNightGrade || lateNightGrade === 0
    );

  return (
    <>
      <TBody customStyle={S.LateNightTBody}>
        {LateNightAllFilter?.map((latenight) => (
          <TR customStyle={S.LateNightTR}>
            <TD customStyle={S.LateNightTD}>{latenight.student.name}</TD>
            <TD customStyle={S.LateNightTD}>
              {latenight.student.grade}학년{latenight.student.room}반
              {latenight.student.room}번
            </TD>
            <TD customStyle={S.LateNightTD}>{latenight.content}</TD>
            <TD customStyle={S.LateNightTD}>
              {latenight.startAt.slice(0, 4)}년{latenight.startAt.slice(5, 7)}월
              {latenight.startAt.slice(8, 10)}일
            </TD>
            <TD customStyle={S.LateNightTD}>
              {latenight.endAt.slice(0, 4)}년{latenight.endAt.slice(5, 7)}월
              {latenight.endAt.slice(8, 10)}일
            </TD>
            <TD customStyle={S.LateNightTD}>{latenight.place}</TD>
            <TD customStyle={S.LateNightTD}>{latenight.isPhone}</TD>
            <TD customStyle={S.LateNightTD}>{latenight.reason}</TD>
            <TD customStyle={S.LateNightTD}>
              <button></button>
            </TD>
          </TR>
        ))}
      </TBody>
    </>
  );
};

export default LateNightAllowItem;
