import * as S from "./style";
import { Button, TBody, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import profileImg from "../../../../assets/profileImg.svg";
import useOffBaseLeave from "../../../../hooks/OffBase/OffBaseLeave/useOffBaseLeave";
import dayjs from "dayjs";
import convertTime from "../../../../utils/Time/convertTime";
import { useGetOffBaseLeaveQuery } from "queries/OffBaseLeave/offbaseleave.query";
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
  const { data: offBaseLeave } = useGetOffBaseLeaveQuery(
    dayjs().format("YYYY-MM-DD"),
    { suspense: true }
  );

  const { handleOffBaseLeave, patchLeaveApprovalCancel } = useOffBaseLeave();

  const filteredResults = offBaseLeave?.data
    .filter((pass) => pass.student.name.includes(studentName))
    .filter((data) => data.student.grade === selectGrade || selectGrade === 0)
    .filter((data) => data.status === selectApproval || selectApproval === "");

  return (
    <>
      {!filteredResults || filteredResults.length === 0 ? (
        <S.NoneTile>현재 외박 중인 학생이 없습니다.</S.NoneTile>
      ) : (
        <TBody customStyle={S.OffBaseTBody}>
          {filteredResults?.map((todayleave) =>
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
                      {convertTime.getDateTime(
                        new Date(todayleave.startAt),
                        "date"
                      )}
                    </div>
                    <div>
                      {convertTime.getDateTime(
                        new Date(todayleave.startAt),
                        "time"
                      )}
                    </div>
                  </S.DateContainer>
                </TD>
                <TD customStyle={S.OffBaseTD}>
                  <S.DateContainer>
                    <div>
                      {convertTime.getDateTime(
                        new Date(todayleave.startAt),
                        "date"
                      )}
                    </div>
                    <div>
                      {convertTime.getDateTime(
                        new Date(todayleave.startAt),
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
