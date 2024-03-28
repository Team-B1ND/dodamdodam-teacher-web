import * as S from "./style";
import { Button, TBody, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import profileImg from "../../../../assets/profileImg.svg";
import useOffBaseLeave from "../../../../hooks/OffBase/OffBaseLeave/useOffBaseLeave";

import { offBaseLeaveDataFilter } from "utils/OffBase/offbaseLeaveDataFilter";
import { useGetTodayLeaveQuery } from "queries/OffBaseLeave/offbaseleave.query";
 
import ConvertDateTime from "utils/Time/convertDateTime";
 
interface OffBasePassProps {
  studentName: string;
  selectGrade: number;
  selectApproval: string | undefined;
}

const TodayOffBaseItem = ({
  selectApproval,
  selectGrade,
  studentName,
}: OffBasePassProps) => {
  const { data: offBaseLeave } = useGetTodayLeaveQuery({ suspense: true });

  const { handleOffBaseLeave, patchLeaveApprovalCancel } = useOffBaseLeave();

  return (
    <>
      {!offBaseLeaveDataFilter ||
      offBaseLeaveDataFilter(
        offBaseLeave,
        studentName,
        selectGrade,
        selectApproval
      )?.length === 0 ? (
        <S.NoneTile>현재 외박 중인 학생이 없습니다.</S.NoneTile>
      ) : (
        <TBody customStyle={S.OffBaseTBody}>
          {offBaseLeaveDataFilter(
            offBaseLeave,
            studentName,
            selectGrade,
            selectApproval
          )?.map((todayleave) =>
            todayleave.status === "ALLOWED" ? (
              <TR customStyle={S.OffBaseTR}>
                <TD customStyle={S.OffBaseTD}>
                  <S.MemberImage src={profileImg} />
                </TD>
                <TD customStyle={S.OffBaseTD}>{todayleave.student.name}</TD>
                <TD customStyle={S.OffBaseTD}>
                  {todayleave.student.grade}학년
                  {todayleave.student.room}반{todayleave.student.room}번
                </TD>
                <TD customStyle={S.OffBaseTD}>
                  <S.DateContainer>
                    <div>
                      {ConvertDateTime.getDateTime(
                        new Date(todayleave.startAt),
                        "date"
                      )}
                    </div>
                    <div>
                      {ConvertDateTime.getDateTime(
                        new Date(todayleave.startAt),
                        "time"
                      )}
                    </div>
                  </S.DateContainer>
                </TD>
                <TD customStyle={S.OffBaseTD}>
                  <S.DateContainer>
                    <div>
                      {ConvertDateTime.getDateTime(
                        new Date(todayleave.endAt),
                        "date"
                      )}
                    </div>
                    <div>
                      {ConvertDateTime.getDateTime(
                        new Date(todayleave.endAt),
                        "time"
                      )}
                    </div>
                  </S.DateContainer>
                </TD>
                <TD customStyle={S.OffBaseTD}>{todayleave.reason}</TD>
                <TD customStyle={S.ButtonContainerStyle}>
                  <div>
                    <Button
                      ButtonType="disagree"
                      style={S.DelStyle}
                      onClick={() =>
                        handleOffBaseLeave(
                          todayleave.id,
                          patchLeaveApprovalCancel
                        )
                      }
                    >
                      승인 취소
                    </Button>
                  </div>
                </TD>
              </TR>
            ) : (
              <S.NoneTile>현재 외박 중인 학생이 없습니다.</S.NoneTile>
            )
          )}
        </TBody>
      )}
    </>
  );
};

export default TodayOffBaseItem;
