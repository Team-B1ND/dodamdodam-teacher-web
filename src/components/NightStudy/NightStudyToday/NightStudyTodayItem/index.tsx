import * as S from "./style";
import { TBody, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import NightStudyModal from "components/NightStudy/NightStudyModal";
import { useGetNightStudyList } from "queries/NightStudy/nightstudy.query";
import { useState } from "react";
import { NightStudyType } from "types/NightStudy/nightstudy.type";
import { NightStudyAllowFilter } from "utils/NightStudy/NightStudyAllow";
import convertDateTime from "utils/Time/ConvertDateTime";
import { truncateText } from "utils/common/truncate";
import useNightStudyAllow from "hooks/NightStudy/NightStudyAllow/useNightStudyAllow";
import { convertNightStudyType } from "utils/NightStudy/ConvertNightStudyType";

interface NightStudyTodayProps {
  studentName: string;
  NightStudyGrade: number;
  selectRoom: string;
}

const NightStudyTodayItem = ({
  studentName,
  NightStudyGrade,
  selectRoom,
}: NightStudyTodayProps) => {
  const { data: NightStudyToday } = useGetNightStudyList({ suspense: true });
  const [isOpen, setIsOpen] = useState(false);
  const [studyData, setStudyData] = useState<NightStudyType>();
  const { handleDeleteNightStudyAllow } = useNightStudyAllow();

  const handleModalClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <TBody customStyle={S.NightStudyTBody}>
        {NightStudyAllowFilter(
          NightStudyToday,
          studentName,
          NightStudyGrade,
          selectRoom
        )?.map((nightstudy) => (
          <TR customStyle={S.NightStudyTR}>
            <TD customStyle={S.NightStudyTD}>{nightstudy.student.name}</TD>
            <TD customStyle={S.NightStudyTD}>
              {nightstudy.student.grade}학년{nightstudy.student.room}반
              {nightstudy.student.number}번
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
                {convertDateTime.getDateTime(
                  new Date(nightstudy.startAt),
                  "date"
                )}
              </div>
            </TD>
            <TD customStyle={S.NightStudyTD}>
              <div style={{ marginLeft: "-5px" }}>
                {convertDateTime.getDateTime(
                  new Date(nightstudy.endAt),
                  "date"
                )}
              </div>
            </TD>
            <TD customStyle={S.NightStudyTD}>
              <div style={{ marginLeft: "-5px" }}>{convertNightStudyType(nightstudy.type)}</div>
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
              <S.NightStudyBox
                style={{ marginLeft: "-14px" }}
                onClick={() => handleDeleteNightStudyAllow(nightstudy.id)}
              >
                승인취소
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
