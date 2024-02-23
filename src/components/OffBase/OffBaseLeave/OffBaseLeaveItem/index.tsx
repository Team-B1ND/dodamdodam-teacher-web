import * as S from "./style";
import { Button, TBody, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import { useGetOffBasePassQuery } from "../../../../queries/OffBasePass/offbasepass.query";
import profileImg from "../../../../assets/profileImg.svg";
import useOffBaseLeave from "../../../../hooks/OffBase/OffBaseLeave/useOffBaseLeave";
import convertTime from "../../../../utils/Time/convertTime";

interface OffBaseLeaveProps {
  studentName: string;
  uploadDate: string;
  selectGrade: number;
  selectApproval: string | undefined;
}

const OffBaseLeaveItem = ({
  selectApproval,
  selectGrade,
  studentName,
  uploadDate,
}: OffBaseLeaveProps) => {
  const { data: offBasePass } = useGetOffBasePassQuery(uploadDate);

  const filteredResults = offBasePass?.data.outsleepingList
    .filter((pass) => pass.student.member.name.includes(studentName))
    .filter(
      (data) =>
        data.student.classroom.grade === selectGrade || selectGrade === 0
    )
    .filter((data) => data.status === selectApproval || selectApproval === "");

  const {
    handleOffBaseLeave,
    patchLeaveApproval,
    patchLeaveApprovalCancel,
    patchLeaveCancel,
  } = useOffBaseLeave();

  return (
    <>
      {!filteredResults || filteredResults.length === 0 ? (
        <S.NoneTile>현재 외박 중인 학생이 없습니다.</S.NoneTile>
      ) : (
        <TBody customStyle={S.OffBaseTBody}>
          {filteredResults?.map((offbaseleave) => (
            <TR customStyle={S.OffBaseTR}>
              <TD customStyle={S.OffBaseTD}>
                <S.MemberImage
                  src={offbaseleave.student.member.profileImage || profileImg}
                />
              </TD>
              <TD customStyle={S.OffBaseTD}>
                {offbaseleave.student.member.name}
              </TD>
              <TD customStyle={S.OffBaseTD}>
                {offbaseleave.student.classroom.grade}학년
                {offbaseleave.student.classroom.room}반
                {offbaseleave.student.classroom.room}번
              </TD>
              <TD customStyle={S.OffBaseTD}>
                <S.DateContainer>
                  <div>
                    {convertTime.getDateTime(
                      new Date(offbaseleave.startOutDate),
                      "date"
                    )}
                  </div>
                  <div>
                    {convertTime.getDateTime(
                      new Date(offbaseleave.startOutDate),
                      "time"
                    )}
                  </div>
                </S.DateContainer>
              </TD>
              <TD customStyle={S.OffBaseTD}>
                <S.DateContainer>
                  <div>
                    {convertTime.getDateTime(
                      new Date(offbaseleave.endOutDate),
                      "date"
                    )}
                  </div>
                  <div>
                    {convertTime.getDateTime(
                      new Date(offbaseleave.endOutDate),
                      "time"
                    )}
                  </div>
                </S.DateContainer>
              </TD>
              <TD customStyle={S.OffBaseTD}>
                <S.Reason>{offbaseleave.reason}</S.Reason>
              </TD>
              <TD customStyle={S.ButtonContainerStyle}>
                {offbaseleave.status === "ALLOWED" ? (
                  <div>
                    <Button
                      ButtonType="disagree"
                      style={S.DelStyle}
                      onClick={() =>
                        handleOffBaseLeave(
                          offbaseleave.id,
                          patchLeaveApprovalCancel
                        )
                      }
                    >
                      승인 취소
                    </Button>
                  </div>
                ) : (
                  <>
                    <Button
                      ButtonType="agree"
                      style={S.EditStyle}
                      onClick={() =>
                        handleOffBaseLeave(offbaseleave.id, patchLeaveApproval)
                      }
                    >
                      승인
                    </Button>
                    <Button
                      ButtonType="disagree"
                      style={S.DelStyle}
                      onClick={() =>
                        handleOffBaseLeave(offbaseleave.id, patchLeaveCancel)
                      }
                    >
                      거절
                    </Button>
                  </>
                )}
              </TD>
            </TR>
          ))}
        </TBody>
      )}
    </>
  );
};

export default OffBaseLeaveItem;
