import * as S from "./style";
import { Button, TBody, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import profileImg from "assets/profileImg.svg";
import useOffBaseLeave from "hooks/Out/OutSleeping/useOutsleeping";

import { outSleepingDataFilter } from "utils/Out/outSleepingDataFilter";
import { useGetTodayOutSleepingQuery } from "queries/OutSleeping/outsleeping.query";

import ConvertDateTime from "utils/Time/ConvertDateTime";
import { truncateText } from "utils/common/truncate";
import OffBaseLeaveModal from "components/Out/OutSleeping/OutSleepingModal";
import { useState } from "react";
import { OutListType } from "types/Out/out.type";

interface OffBasePassProps {
  studentName: string;
  selectGrade: number;
  selectApproval: string | undefined;
  selectRoom: string;
}

const TodayOutSleepingItem = ({ selectApproval, selectGrade, studentName, selectRoom }: OffBasePassProps) => {
  const { data: offBaseLeave } = useGetTodayOutSleepingQuery({ suspense: true });
  const [leaveData, setLeaveData] = useState<OutListType>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { handleOffBaseLeave, patchLeaveApprovalCancel } = useOffBaseLeave();

  const handleModalClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {!outSleepingDataFilter ||
      outSleepingDataFilter(offBaseLeave, studentName, selectGrade, selectApproval, selectRoom)?.length === 0 ? (
        <S.NoneTile>현재 외박 중인 학생이 없습니다.</S.NoneTile>
      ) : (
        <>
          <TBody customStyle={S.OffBaseTBody}>
            {outSleepingDataFilter(offBaseLeave, studentName, selectGrade, selectApproval, selectRoom)?.map(
              (todayleave) =>
                todayleave.status === "ALLOWED" ? (
                  <TR customStyle={S.OffBaseTR}>
                    <TD customStyle={S.OffBaseTD}>
                      <S.MemberImage src={profileImg} />
                    </TD>
                    <TD customStyle={S.OffBaseTD}>{todayleave.student.name}</TD>
                    <TD customStyle={S.OffBaseTD}>
                      {todayleave.student.grade}학년
                      {todayleave.student.room}반{todayleave.student.number}번
                    </TD>
                    <TD customStyle={S.OffBaseTD}>
                      <S.DateContainer>
                        <div>{ConvertDateTime.getDateTime(new Date(todayleave.startAt), "date")}</div>
                        <div>{ConvertDateTime.getDateTime(new Date(todayleave.startAt), "time")}</div>
                      </S.DateContainer>
                    </TD>
                    <TD customStyle={S.OffBaseTD}>
                      <S.DateContainer>
                        <div>{ConvertDateTime.getDateTime(new Date(todayleave.endAt), "date")}</div>
                        <div>{ConvertDateTime.getDateTime(new Date(todayleave.endAt), "time")}</div>
                      </S.DateContainer>
                    </TD>
                    <TD customStyle={S.OffBaseTD}>
                      <div
                        onClick={() => {
                          handleModalClick();
                          setLeaveData(todayleave);
                        }}
                      >
                        {truncateText(todayleave.reason, 7)}
                      </div>
                    </TD>
                    <TD customStyle={S.ButtonContainerStyle}>
                      <div>
                        <Button
                          ButtonType="disagree"
                          style={S.DelStyle}
                          onClick={() => handleOffBaseLeave(todayleave.id, patchLeaveApprovalCancel)}
                        >
                          승인 취소
                        </Button>
                      </div>
                    </TD>
                  </TR>
                ) : (
                  <S.NoneTile>현재 외박 중인 학생이 없습니다.</S.NoneTile>
                ),
            )}
          </TBody>
          <OffBaseLeaveModal isOpen={isOpen} data={leaveData} handleModalClick={handleModalClick} where="PASS" />
        </>
      )}
    </>
  );
};

export default TodayOutSleepingItem;
