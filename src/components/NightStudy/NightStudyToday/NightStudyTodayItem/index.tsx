import * as S from "./style";
import { TBody, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import NightStudyModal from "components/NightStudy/NightStudyModal";
import { useGetNightStudyList } from "queries/NightStudy/nightstudy.query";
import { useState } from "react";
import { NightStudyType } from "types/NightStudy/nightstudy.type";
import { NightStudyAllowFilter } from "utils/NightStudy/NightStudyAllow";
import convertTime from "utils/Time/convertTime";
import { truncateText } from "utils/common/truncate";

interface NightStudyTodayProps {
  studentName: string;
  NightStudyGrade: number;
}

const NightStudyTodayItem = ({
  studentName,
  NightStudyGrade,
}: NightStudyTodayProps) => {
  const { data: NightStudyToday } = useGetNightStudyList({ suspense: true });

  const [isOpen, setIsOpen] = useState(false);
  const [studyData, setStudyData] = useState<NightStudyType>();

  const handleModalClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <TBody customStyle={S.NightStudyTBody}>
        {NightStudyAllowFilter(
          NightStudyToday,
          studentName,
          NightStudyGrade
        )?.map((nightstudy) => (
          <TR customStyle={S.NightStudyTR}>
            <TD customStyle={S.NightStudyTD}>{nightstudy.student.name}</TD>
            <TD customStyle={S.NightStudyTD}>
              {nightstudy.student.grade}학년{nightstudy.student.room}반
              {nightstudy.student.room}번
            </TD>
            <TD customStyle={S.NightStudyTD}>
              <div
                onClick={() => {
                  handleModalClick();
                  setStudyData(nightstudy);
                }}
              >
                {truncateText(nightstudy.content, 5)}
              </div>
            </TD>
            <TD customStyle={S.NightStudyTD}>
              <div style={{ marginLeft: "-5px" }}>
                {convertTime.getDateTime(new Date(nightstudy.startAt), "date")}
              </div>
            </TD>
            <TD customStyle={S.NightStudyTD}>
              <div style={{ marginLeft: "-5px" }}>
                {convertTime.getDateTime(new Date(nightstudy.endAt), "date")}
              </div>
            </TD>
            <TD customStyle={S.NightStudyTD}>
              <div style={{ marginLeft: "-5px" }}>{nightstudy.place}</div>
            </TD>
            <TD customStyle={S.NightStudyTD}>
              <div style={{ marginLeft: "9px" }}>
                {nightstudy.doNeedPhone === true ? "O" : "X"}
              </div>
            </TD>
            <TD customStyle={S.NightStudyTD}>
              {truncateText(nightstudy.reasonForPhone, 5)}
            </TD>
            <TD customStyle={S.NightStudyTD}>
              <S.NightStudyBox style={{ marginLeft: "-14px" }}>
                심자중
              </S.NightStudyBox>
            </TD>
          </TR>
        ))}
      </TBody>
      <NightStudyModal
        isOpen={isOpen}
        data={studyData}
        handleModalClick={handleModalClick}
      />
    </>
  );
};

export default NightStudyTodayItem;
