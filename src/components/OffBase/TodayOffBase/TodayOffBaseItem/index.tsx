import * as S from "./style";
import { Button, TBody, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import profileImg from "assets/profileImg.svg";
import useOffBaseLeave from "hooks/OffBase/OffBaseLeave/useOffBaseLeave";

import { offBaseLeaveDataFilter } from "utils/OffBase/offbaseLeaveDataFilter";
import { useGetTodayLeaveQuery } from "queries/OffBaseLeave/offbaseleave.query";

import ConvertDateTime from "utils/Time/ConvertDateTime";
import { truncateText } from "utils/common/truncate";
import OffBaseLeaveModal from "components/OffBase/OffBaseLeave/OffBaseLeaveModal";
import { useState } from "react";
import { OutListType } from "types/OffBasePass/offbasepass.type";

interface OffBasePassProps {
  studentName: string;
  selectGrade: number;
  selectApproval: string | undefined;
  selectRoom: string;
}

const TodayOffBaseItem = ({ selectApproval, selectGrade, studentName, selectRoom }: OffBasePassProps) => {
  const { data: offBaseLeave } = useGetTodayLeaveQuery({ suspense: true });
  const [leaveData, setLeaveData] = useState<OutListType>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { handleOffBaseLeave, patchLeaveApprovalCancel } = useOffBaseLeave();

  const handleModalClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {!offBaseLeaveDataFilter ||
      offBaseLeaveDataFilter(offBaseLeave, studentName, selectGrade, selectApproval, selectRoom)?.length === 0 ? (
        <S.NoneTile>현재 외박 중인 학생이 없습니다.</S.NoneTile>
      ) : (
        <>
          <TBody customStyle={S.OffBaseTBody}>
            {offBaseLeaveDataFilter(offBaseLeave, studentName, selectGrade, selectApproval, selectRoom)?.map(
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
          <OffBaseLeaveModal isOpen={isOpen} data={leaveData} handleModalClick={handleModalClick} where="PASS"/>
        </>
      )}
    </>
  );
};

export default TodayOffBaseItem;
