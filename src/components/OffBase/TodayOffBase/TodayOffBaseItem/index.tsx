import * as S from "./style";
import { Button, TBody, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import { useGetOffBasePassQuery } from "../../../../queries/OffBasePass/offbasepass.query";
import profileImg from "../../../../assets/profileImg.svg";
import useOffBaseLeave from "../../../../hooks/OffBase/OffBaseLeave/useOffBaseLeave";
import dayjs from "dayjs";
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
    dayjs().format("YYYY-MM-DD")
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
          {filteredResults?.map((key) =>
            key.status === "ALLOWED" ? (
              <TR customStyle={S.OffBaseTR}>
                <TD customStyle={S.OffBaseTD}>
                  <S.MemberImage
                    src={key.student.member.profileImage || profileImg}
                  />
                </TD>
                <TD customStyle={S.OffBaseTD}>{key.student.member.name}</TD>
                <TD customStyle={S.OffBaseTD}>
                  {key.student.classroom.grade}학년
                  {key.student.classroom.room}반{key.student.classroom.room}번
                </TD>
                <TD customStyle={S.OffBaseTD}>
                  {key.startOutDate.slice(0, 10)}{" "}
                  {key.startOutDate.slice(11, 13)}시
                  {key.startOutDate.slice(14, 16)}분
                </TD>
                <TD customStyle={S.OffBaseTD}>
                  {key.endOutDate.slice(0, 10)} {key.endOutDate.slice(11, 13)}시
                  {key.endOutDate.slice(14, 16)}분
                </TD>
                <TD customStyle={S.OffBaseTD}>{key.reason}</TD>
                <TD customStyle={S.ButtonContainerStyle}>
                  <div>
                    <Button
                      ButtonType="disagree"
                      style={S.DelStyle}
                      onClick={() =>
                        handleOffBaseLeave(key.id, patchLeaveApprovalCancel)
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
