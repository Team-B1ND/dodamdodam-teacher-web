import * as S from "./style";
import { Button, TBody, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import { useGetOffBasePassQuery } from "../../../../queries/OffBasePass/offbasepass.query";
import profileImg from "../../../../assets/profileImg.svg";
import useOffBaseLeave from "../../../../hooks/OffBase/OffBaseLeave/useOffBaseLeave";
import dayjs from "dayjs";
import convertDateTime from "../../../../utils/Time/ConvertDateTime";
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
  const { data: offBasePass } = useGetOffBasePassQuery(
    dayjs().format("YYYY-MM-DD"),
    { suspense: true }
  );

  const { handleOffBaseLeave, patchLeaveApprovalCancel } = useOffBaseLeave();

  const filteredResults = offBasePass?.data.outsleepingList
    .filter((pass) => pass.student.member.name.includes(studentName))
    .filter(
      (data) =>
        data.student.classroom.grade === selectGrade || selectGrade === 0
    )
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
                  <S.MemberImage
                    src={todayleave.student.member.profileImage || profileImg}
                  />
                </TD>
                <TD customStyle={S.OffBaseTD}>
                  {todayleave.student.member.name}
                </TD>
                <TD customStyle={S.OffBaseTD}>
                  {todayleave.student.classroom.grade}학년
                  {todayleave.student.classroom.room}반
                  {todayleave.student.classroom.room}번
                </TD>
                <TD customStyle={S.OffBaseTD}>
                  <S.DateContainer>
                    <div>
                      {convertDateTime.getDateTime(
                        new Date(todayleave.startOutDate),
                        "date"
                      )}
                    </div>
                    <div>
                      {convertDateTime.getDateTime(
                        new Date(todayleave.startOutDate),
                        "time"
                      )}
                    </div>
                  </S.DateContainer>
                </TD>
                <TD customStyle={S.OffBaseTD}>
                  <S.DateContainer>
                    <div>
                      {convertDateTime.getDateTime(
                        new Date(todayleave.startOutDate),
                        "date"
                      )}
                    </div>
                    <div>
                      {convertDateTime.getDateTime(
                        new Date(todayleave.startOutDate),
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
