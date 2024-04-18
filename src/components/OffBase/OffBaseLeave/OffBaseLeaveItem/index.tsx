import * as S from "./style";
import { Button, TBody, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import profileImg from "../../../../assets/profileImg.svg";
import useOffBaseLeave from "../../../../hooks/OffBase/OffBaseLeave/useOffBaseLeave";
import convertDateTime from "../../../../utils/Time/convertDateTime";
import { useGetOffBaseLeaveQuery } from "queries/OffBaseLeave/offbaseleave.query";
import { offBaseLeaveDataFilter } from "utils/OffBase/offbaseLeaveDataFilter";

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
  const { data: offBaseLeave } = useGetOffBaseLeaveQuery(uploadDate, {
    suspense: true,
  });

  const {
    handleOffBaseLeave,
    patchLeaveApproval,
    patchLeaveApprovalCancel,
    patchLeaveCancel,
  } = useOffBaseLeave();

  const selectComponent = (Id: number) => {
    const component = offBaseLeaveDataFilter(
      offBaseLeave,
      studentName,
      selectGrade,
      selectApproval
    )?.find((key) => key.id === Id)?.status;

    if (component === "ALLOWED") {
      return (
        <div>
          <Button
            ButtonType="disagree"
            style={S.DelStyle}
            onClick={() => handleOffBaseLeave(Id, patchLeaveApprovalCancel)}
          >
            승인 취소
          </Button>
        </div>
      );
    } else if (component === "PENDING") {
      return (
        <>
          <Button
            ButtonType="agree"
            style={S.EditStyle}
            onClick={() => handleOffBaseLeave(Id, patchLeaveApproval)}
          >
            승인
          </Button>
          <Button
            ButtonType="disagree"
            style={S.DelStyle}
            onClick={() => handleOffBaseLeave(Id, patchLeaveCancel)}
          >
            거절
          </Button>
        </>
      );
    } else if (component === "REJECTED") {
      return (
        <Button ButtonType="disagree" style={S.ClearStyle}>
          거절됨
        </Button>
      );
    }
  };

  return (
    <>
      {!offBaseLeaveDataFilter ||
      offBaseLeaveDataFilter(
        offBaseLeave,
        studentName,
        selectGrade,
        selectApproval
      )?.length === 0 ? (
        <S.NoneTile>현재 외박 신청한 학생이 없습니다.</S.NoneTile>
      ) : (
        <TBody customStyle={S.OffBaseTBody}>
          {offBaseLeaveDataFilter(
            offBaseLeave,
            studentName,
            selectGrade,
            selectApproval
          )?.map((offbaseleave) => (
            <TR customStyle={S.OffBaseTR}>
              <TD customStyle={S.OffBaseTD}>
                <S.MemberImage src={profileImg} />
              </TD>
              <TD customStyle={S.OffBaseTD}>{offbaseleave.student.name}</TD>
              <TD customStyle={S.OffBaseTD}>
                {offbaseleave.student.grade}학년
                {offbaseleave.student.room}반{offbaseleave.student.number}번
              </TD>
              <TD customStyle={S.OffBaseTD}>
                <S.DateContainer>
                  <div>
                    {convertDateTime.getDateTime(
                      new Date(offbaseleave.startAt),
                      "date"
                    )}
                  </div>
                  <div>
                    {convertDateTime.getDateTime(
                      new Date(offbaseleave.startAt),
                      "time"
                    )}
                  </div>
                </S.DateContainer>
              </TD>
              <TD customStyle={S.OffBaseTD}>
                <S.DateContainer>
                  <div>
                    {convertDateTime.getDateTime(
                      new Date(offbaseleave.endAt),
                      "date"
                    )}
                  </div>
                  <div>
                    {convertDateTime.getDateTime(
                      new Date(offbaseleave.endAt),
                      "time"
                    )}
                  </div>
                </S.DateContainer>
              </TD>
              <TD customStyle={S.OffBaseTD}>
                <S.Reason>{offbaseleave.reason}</S.Reason>
              </TD>
              <TD customStyle={S.ButtonContainerStyle}>
                {selectComponent(offbaseleave.id)}
              </TD>
            </TR>
          ))}
        </TBody>
      )}
    </>
  );
};

export default OffBaseLeaveItem;
