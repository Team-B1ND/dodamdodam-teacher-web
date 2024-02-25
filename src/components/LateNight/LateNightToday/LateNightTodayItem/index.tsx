import * as S from "./style";
import { TBody, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import LateNightModal from "components/LateNight/LateNightModal";
import { useGetLateNightList } from "queries/LateNight/latenight.query";
import { useState } from "react";
import { LateNightType } from "types/LateNight/latenight.type";
import { LateNightAllowFilter } from "utils/LateNight/lateNightAllow";
import convertTime from "utils/Time/convertTime";
import { truncateText } from "utils/common/truncate";

interface LateNightTodayProps {
  studentName: string;
  lateNightGrade: number;
}

const LateNightTodayItem = ({
  studentName,
  lateNightGrade,
}: LateNightTodayProps) => {
  const { data: lateNightToday } = useGetLateNightList();

  const [isOpen, setIsOpen] = useState(false);
  const [studyData, setStudyData] = useState<LateNightType>();

  const handleModalClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <TBody customStyle={S.LateNightTBody}>
        {LateNightAllowFilter(lateNightToday, studentName, lateNightGrade)?.map(
          (latenight) => (
            <TR customStyle={S.LateNightTR}>
              <TD customStyle={S.LateNightTD}>{latenight.student.name}</TD>
              <TD customStyle={S.LateNightTD}>
                {latenight.student.grade}학년{latenight.student.room}반
                {latenight.student.room}번
              </TD>
              <TD customStyle={S.LateNightTD}>
                <div
                  onClick={() => {
                    handleModalClick();
                    setStudyData(latenight);
                  }}
                >
                  {truncateText(latenight.content, 5)}
                </div>
              </TD>
              <TD customStyle={S.LateNightTD}>
                <div style={{ marginLeft: "-5px" }}>
                  {convertTime.getDateTime(new Date(latenight.startAt), "date")}
                </div>
              </TD>
              <TD customStyle={S.LateNightTD}>
                <div style={{ marginLeft: "-5px" }}>
                  {convertTime.getDateTime(new Date(latenight.endAt), "date")}
                </div>
              </TD>
              <TD customStyle={S.LateNightTD}>
                <div style={{ marginLeft: "-5px" }}>{latenight.place}</div>
              </TD>
              <TD customStyle={S.LateNightTD}>
                <div style={{ marginLeft: "9px" }}>
                  {latenight.isPhone === true ? "O" : "X"}
                </div>
              </TD>
              <TD customStyle={S.LateNightTD}>
                {truncateText(latenight.reason, 5)}
              </TD>
              <TD customStyle={S.LateNightTD}>
                <S.LateNightBox style={{ marginLeft: "-14px" }}>
                  심자중
                </S.LateNightBox>
              </TD>
            </TR>
          )
        )}
      </TBody>
      <LateNightModal
        isOpen={isOpen}
        data={studyData}
        handleModalClick={handleModalClick}
      />
    </>
  );
};

export default LateNightTodayItem;
