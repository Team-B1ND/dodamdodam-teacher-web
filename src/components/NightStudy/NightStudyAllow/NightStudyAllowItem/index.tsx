import * as S from "./style";
import { Button, TBody, TD } from "@b1nd/b1nd-dodamdodam-ui";
import { useGetPendingNightStudy } from "queries/NightStudy/nightstudy.query";
import { truncateText } from "../../../../utils/common/truncate";
import { NightStudyAllowFilter } from "utils/NightStudy/NightStudyAllow";
import useNightStudyAllow from "hooks/NightStudy/NightStudyAllow/useNightStudyAllow";
import NightStudyModal from "components/NightStudy/NightStudyModal";
import { useState } from "react";
import { NightStudyType } from "types/NightStudy/nightstudy.type";

import convertDateTime from "utils/Time/ConvertDateTime";
import { useRecoilState } from "recoil";
import { NightStudySelectIdAtom } from "stores/NightStudy/nightstudy.store";

interface NightStudyAllowProps {
  studentName: string;
  NightStudyGrade: number;
  selectRoom: string;
}

const NightStudyAllowItem = ({
  studentName,
  NightStudyGrade,
  selectRoom,
}: NightStudyAllowProps) => {
  const { data: NightStudyAllow } = useGetPendingNightStudy({ suspense: true });
  const { handleNightStudyAllow, patchNighStudytAllow, patchNightStudyCancel } =
    useNightStudyAllow();
  const [isOpen, setIsOpen] = useState(false);
  const [studyData, setStudyData] = useState<NightStudyType>();
  const [studySelectedIds, setStudySelectedIds] = useRecoilState(
    NightStudySelectIdAtom
  );
  const handleModalClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <TBody customStyle={S.NightStudyTBody}>
        {NightStudyAllowFilter(
          NightStudyAllow,
          studentName,
          NightStudyGrade,
          selectRoom
        )?.map((nightstudy) => (
          <S.NightStudyTR
            onClick={() => {
              if (nightstudy.status === "PENDING") {
                if (studySelectedIds.includes(nightstudy.id)) {
                  setStudySelectedIds((prevIds) =>
                    prevIds.filter((id) => id !== nightstudy.id)
                  );
                } else {
                  setStudySelectedIds([...studySelectedIds, nightstudy.id]);
                }
              }
            }}
            style={{
              backgroundColor: studySelectedIds.includes(nightstudy.id)
                ? "#EEF3F9"
                : "",
            }}
          >
            <TD customStyle={S.NightStudytTD}>{nightstudy.student.name}</TD>
            <TD customStyle={S.NightStudytTD}>
              {nightstudy.student.grade}학년{nightstudy.student.room}반
              {nightstudy.student.number}번
            </TD>
            <TD customStyle={S.NightStudytTD}>
              <div
                onClick={() => {
                  handleModalClick();
                  setStudyData(nightstudy);
                }}
              >
                {truncateText(nightstudy.content, 5)}
              </div>
            </TD>
            <TD customStyle={S.NightStudytTD}>
              <div style={{ marginLeft: "-5px" }}>
                {convertDateTime.getDateTime(
                  new Date(nightstudy.startAt),
                  "date"
                )}
              </div>
            </TD>
            <TD customStyle={S.NightStudytTD}>
              <div style={{ marginLeft: "-5px" }}>
                {convertDateTime.getDateTime(
                  new Date(nightstudy.endAt),
                  "date"
                )}
              </div>
            </TD>
            <TD customStyle={S.NightStudytTD}>
              <div style={{ marginLeft: "-5px" }}>{nightstudy.place}</div>
            </TD>
            <TD customStyle={S.NightStudytTD}>
              <div style={{ marginLeft: "5px" }}>
                {nightstudy.doNeedPhone === true ? "O" : "X"}
              </div>
            </TD>
            <TD customStyle={S.NightStudytTD}>
              {truncateText(nightstudy.reasonForPhone, 5)}
            </TD>
            <TD customStyle={S.NightStudytTD}>
              <div style={{ marginLeft: "-20px" }}>
                <Button
                  ButtonType="agree"
                  onClick={() =>
                    handleNightStudyAllow(nightstudy.id, patchNighStudytAllow)
                  }
                >
                  수락
                </Button>
                <Button
                  ButtonType="disagree"
                  onClick={() =>
                    handleNightStudyAllow(nightstudy.id, patchNightStudyCancel)
                  }
                >
                  거절
                </Button>
              </div>
            </TD>
          </S.NightStudyTR>
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

export default NightStudyAllowItem;
