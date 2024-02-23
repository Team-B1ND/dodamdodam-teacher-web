import * as S from "./style";
import { Button, TBody, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import { useGetPendingLateNight } from "../../../../queries/LateNight/latenight.query";
import { truncateText } from "../../../../utils/common/truncate";
import { LateNightAllowFilter } from "../../../../utils/LateNight/lateNightAllow";
import useLateNightAllow from "../../../../hooks/LateNight/LateNightAllow/useLateNightAllow";
interface LateNightAllowProps {
  studentName: string;
  lateNightGrade: number;
}

const LateNightAllowItem = ({
  studentName,
  lateNightGrade,
}: LateNightAllowProps) => {
  const { data: lateNightAllow } = useGetPendingLateNight();
  const { handleLateNightAllow, patchLateNightAllow, patchLateNightCancel } =
    useLateNightAllow();
  return (
    <>
      <TBody customStyle={S.LateNightTBody}>
        {LateNightAllowFilter(lateNightAllow, studentName, lateNightGrade)?.map(
          (latenight) => (
            <TR customStyle={S.LateNightTR}>
              <TD customStyle={S.LateNightTD}>{latenight.student.name}</TD>
              <TD customStyle={S.LateNightTD}>
                {latenight.student.grade}학년{latenight.student.room}반
                {latenight.student.room}번
              </TD>
              <TD customStyle={S.LateNightTD}>
                {truncateText(latenight.content, 5)}
              </TD>
              <TD customStyle={S.LateNightTD}>
                <div style={{ marginLeft: "-5px" }}>
                  {latenight.startAt.slice(0, 4)}년
                  {latenight.startAt.slice(5, 7)}월
                  {latenight.startAt.slice(8, 10)}일
                </div>
              </TD>
              <TD customStyle={S.LateNightTD}>
                <div style={{ marginLeft: "-5px" }}>
                  {latenight.endAt.slice(0, 4)}년{latenight.endAt.slice(5, 7)}월
                  {latenight.endAt.slice(8, 10)}일
                </div>
              </TD>
              <TD customStyle={S.LateNightTD}>
                <div style={{ marginLeft: "-5px" }}>{latenight.place}</div>
              </TD>
              <TD customStyle={S.LateNightTD}>
                <div style={{ marginLeft: "5px" }}>
                  {latenight.isPhone === true ? "O" : "X"}
                </div>
              </TD>
              <TD customStyle={S.LateNightTD}>
                {truncateText(latenight.reason, 5)}
              </TD>
              <TD customStyle={S.LateNightTD}>
                <div style={{ marginLeft: "-20px" }}>
                  <Button
                    ButtonType="agree"
                    onClick={() =>
                      handleLateNightAllow(latenight.id, patchLateNightAllow)
                    }
                  >
                    수락
                  </Button>
                  <Button
                    ButtonType="disagree"
                    onClick={() =>
                      handleLateNightAllow(latenight.id, patchLateNightCancel)
                    }
                  >
                    거절
                  </Button>
                </div>
              </TD>
            </TR>
          )
        )}
      </TBody>
    </>
  );
};

export default LateNightAllowItem;
