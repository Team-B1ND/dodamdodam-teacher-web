import * as S from "./style";
import { useGetOffBasePassQuery } from "../../../../queries/OffBasePass/offbasepass.query";
import { Button, TBody, TD } from "@b1nd/b1nd-dodamdodam-ui";
import profileImg from "../../../../assets/profileImg.svg";
import useOffBasePass from "../../../../hooks/OffBase/OffBasePass/useOffBasePass";
import { useRecoilState } from "recoil";
import { SelectIdAtom } from "../../../../stores/OffBase/offbase.store";
import { offBaseDataFilter } from "../../../../utils/OffBasePass/offBaseDataFilter";
import convertDateTime from "../../../../utils/Time/ConvertDateTime";

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
  const { data: offBasePass } = useGetOffBasePassQuery(uploadDate, {
    suspense: true,
  });
  const [selectedIds, setSelectedIds] = useRecoilState<number[]>(SelectIdAtom);

  const {
    handleOffBasePass,
    patchApprovalCancel,
    patchApprovals,
    patchCancel,
  } = useOffBasePass();

  const selectComponent = (Id: number) => {
    const component = offBaseDataFilter(
      offBasePass,
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
            onClick={() => {
              handleOffBasePass([Id], patchApprovalCancel);
              setSelectedIds((prevIds) =>
                prevIds.filter((id: any) => id !== Id)
              );
            }}
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
            onClick={() => {
              handleOffBasePass([Id], patchApprovals);
            }}
          >
            승인
          </Button>
          <Button
            ButtonType="disagree"
            style={S.DelStyle}
            onClick={() => handleOffBasePass([Id], patchCancel)}
          >
            거절
          </Button>
        </>
      );
    } else if (component === "DENIED") {
      return (
        <Button ButtonType="disagree" style={S.ClearStyle}>
          거절됨
        </Button>
      );
    }
  };

  return (
    <>
      {!offBaseDataFilter ||
      offBaseDataFilter(offBasePass, studentName, selectGrade, selectApproval)
        ?.length === 0 ? (
        <S.NoneTile>현재 심자 신청한 학생이 없습니다.</S.NoneTile>
      ) : (
        <div>
          {offBaseDataFilter(
            offBasePass,
            studentName,
            selectGrade,
            selectApproval
          )?.map((offbasepass) => (
            <TBody customStyle={S.OffBaseTBody}>
              <S.OffBaseTR
                onClick={() => {
                  offbasepass.status === "PENDING" &&
                    setSelectedIds((prevIds) =>
                      prevIds.includes(offbasepass.id)
                        ? prevIds.filter((id) => id !== offbasepass.id)
                        : [...prevIds, offbasepass.id]
                    );
                }}
                style={{
                  backgroundColor: selectedIds.includes(offbasepass.id)
                    ? "#EEF3F9"
                    : "",
                }}
              >
                <TD customStyle={S.OffBaseTD}>
                  <S.MemberImage
                    src={offbasepass.student.member.profileImage || profileImg}
                  />
                </TD>
                <TD customStyle={S.OffBaseTD}>
                  {offbasepass.student.member.name}
                </TD>
                <TD customStyle={S.OffBaseTD}>
                  {offbasepass.student.classroom.grade}학년
                  {offbasepass.student.classroom.room}반
                  {offbasepass.student.classroom.room}번
                </TD>
                <TD customStyle={S.OffBaseTD}>
                  <S.DateContainer>
                    <div>
                      {convertDateTime.getDateTime(
                        new Date(offbasepass.startOutDate),
                        "date"
                      )}
                    </div>
                    <div>
                      {convertDateTime.getDateTime(
                        new Date(offbasepass.startOutDate),
                        "time"
                      )}
                    </div>
                  </S.DateContainer>
                </TD>
                <TD customStyle={S.OffBaseTD}>
                  <S.DateContainer>
                    <div>
                      {convertDateTime.getDateTime(
                        new Date(offbasepass.endOutDate),
                        "date"
                      )}
                    </div>
                    <div>
                      {convertDateTime.getDateTime(
                        new Date(offbasepass.endOutDate),
                        "time"
                      )}
                    </div>
                  </S.DateContainer>
                </TD>
                <TD customStyle={S.OffBaseTD}>{offbasepass.reason}</TD>
                <TD customStyle={S.ButtonContainerStyle}>
                  {selectComponent(offbasepass.id)}
                </TD>
              </S.OffBaseTR>
            </TBody>
          ))}
        </div>
      )}
    </>
  );
};

export default OffBasePassItem;
