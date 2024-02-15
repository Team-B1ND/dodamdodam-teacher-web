import * as S from "./style";
import { useGetOffBasePassQuery } from "../../../../queries/OffBasePass/offbasepass.query";
import { Button, TBody, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import profileImg from "../../../../assets/profileImg.svg";
import useOffBasePass from "../../../../hooks/OffBasePass/useOffBasePass";

interface OffBasePassProps {
  studentName: string;
  uploadDate: string;
  selectGrade: number;
  selectApproval: string | undefined;
}

const OffBasePassItem = ({
  studentName,
  uploadDate,
  selectGrade,
  selectApproval,
}: OffBasePassProps) => {
  const { data: OffBaswPass } = useGetOffBasePassQuery(uploadDate, {
    suspense: true,
  });

  const {
    handleOffBasePass,
    patchApprovalCancel,
    patchApprovals,
    patchCancel,
    handleOffBaseArrived,
  } = useOffBasePass();

  const filteredResults = OffBaswPass?.data.outgoingList
    .filter((pass) => pass.student.member.name.includes(studentName))
    .filter(
      (data) =>
        data.student.classroom.grade === selectGrade || selectGrade === 0
    )
    .filter((data) => data.status === selectApproval || selectApproval === "");

  return (
    <>
      {!filteredResults || filteredResults.length === 0 ? (
        <S.NoneTile>현재 외출 중인 학생이 없습니다.</S.NoneTile>
      ) : (
        <TBody customStyle={S.OffBaseTBody}>
          {filteredResults?.map((key) => (
            <TR customStyle={S.OffBaseTR}>
              <TD customStyle={S.OffBaseTD}>
                <S.MemberImage
                  src={key.student.member.profileImage || profileImg}
                />
              </TD>
              <TD customStyle={S.OffBaseTD}>{key.student.member.name}</TD>
              <TD customStyle={S.OffBaseTD}>
                {key.student.classroom.grade}학년{key.student.classroom.room}반
                {key.student.classroom.room}번
              </TD>
              <TD customStyle={S.OffBaseTD}>
                {key.startOutDate.slice(0, 10)} {key.startOutDate.slice(11, 13)}
                시{key.startOutDate.slice(14, 16)}분
              </TD>
              <TD customStyle={S.OffBaseTD}>
                {key.endOutDate.slice(0, 10)} {key.endOutDate.slice(11, 13)}시
                {key.endOutDate.slice(14, 16)}분
              </TD>
              <TD customStyle={S.OffBaseTD}>{key.reason}</TD>
              <TD customStyle={S.ButtonContainerStyle}>
                {key.status === "ALLOWED" ? (
                  <>
                    <Button
                      ButtonType="agree"
                      style={S.EditStyle}
                      onClick={() => handleOffBaseArrived(key.id)}
                    >
                      복귀 처리
                    </Button>
                    <Button
                      ButtonType="disagree"
                      style={S.DelStyle}
                      onClick={() =>
                        handleOffBasePass(key.id, patchApprovalCancel)
                      }
                    >
                      승인 취소
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      ButtonType="agree"
                      style={S.EditStyle}
                      onClick={() => handleOffBasePass(key.id, patchApprovals)}
                    >
                      승인
                    </Button>
                    <Button
                      ButtonType="disagree"
                      style={S.DelStyle}
                      onClick={() => handleOffBasePass(key.id, patchCancel)}
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

export default OffBasePassItem;
