import * as S from "./style";
import { useGetOffBasePassQuery } from "../../../../queries/OffBasePass/offbasepass.query";
import { Button, TBody, TD } from "@b1nd/b1nd-dodamdodam-ui";
import profileImg from "../../../../assets/profileImg.svg";
import useOffBasePass from "../../../../hooks/OffBase/OffBasePass/useOffBasePass";
import { useRecoilState } from "recoil";
import { SelectIdAtom } from "../../../../stores/OffBase/offbase.store";
import convertDateTime from "../../../../utils/Time/ConvertDateTime";
import { offBaseDataFilter } from "utils/OffBase/offBasePassDataFilter";

interface OffBasePassProps {
  studentName: string;
  uploadDate: string;
  selectGrade: number;
  selectApproval: string | undefined;
  selectRoom: string;
}

const OffBasePassItem = ({
  studentName,
  uploadDate,
  selectGrade,
  selectApproval,
  selectRoom,
}: OffBasePassProps) => {
  const { data: offBasePass } = useGetOffBasePassQuery(uploadDate, {
    suspense: true,
  });

  const [selectedIds, setSelectedIds] = useRecoilState<number>(SelectIdAtom);

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
      selectApproval,
      selectRoom
    )?.find((key) => key.id === Id)?.status;

    if (component === "ALLOWED") {
      return (
        <div>
          <Button
            ButtonType="disagree"
            style={S.DelStyle}
            onClick={() => {
              handleOffBasePass(Id, patchApprovalCancel);
              setSelectedIds(Id);
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
              handleOffBasePass(Id, patchApprovals);
            }}
          >
            승인
          </Button>
          <Button
            ButtonType="disagree"
            style={S.DelStyle}
            onClick={() => handleOffBasePass(Id, patchCancel)}
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
      {!offBaseDataFilter ||
      offBaseDataFilter(
        offBasePass,
        studentName,
        selectGrade,
        selectApproval,
        selectRoom
      )?.length === 0 ? (
        <S.NoneTile>현재 외출 신청한 학생이 없습니다.</S.NoneTile>
      ) : (
        <div>
          {offBaseDataFilter(
            offBasePass,
            studentName,
            selectGrade,
            selectApproval,
            selectRoom
          )?.map((offbasepass) => (
            <TBody customStyle={S.OffBaseTBody}>
              <S.OffBaseTR
                onClick={() => {
                  offbasepass.status === "PENDING" &&
                    setSelectedIds(offbasepass.id);
                }}
                style={{
                  backgroundColor:
                    selectedIds === offbasepass.id ? "#EEF3F9" : "",
                }}
              >
                <TD customStyle={S.OffBaseTD}>
                  <S.MemberImage src={profileImg} />
                </TD>
                <TD customStyle={S.OffBaseTD}>{offbasepass.student.name}</TD>
                <TD customStyle={S.OffBaseTD}>
                  {offbasepass.student.grade}학년
                  {offbasepass.student.room}반{offbasepass.student.number}번
                </TD>
                <TD customStyle={S.OffBaseTD}>
                  <S.DateContainer>
                    <div>
                      {convertDateTime.getDateTime(
                        new Date(offbasepass.startAt),
                        "date"
                      )}
                    </div>
                    <div>
                      {convertDateTime.getDateTime(
                        new Date(offbasepass.startAt),
                        "time"
                      )}
                    </div>
                  </S.DateContainer>
                </TD>
                <TD customStyle={S.OffBaseTD}>
                  <S.DateContainer>
                    <div>
                      {convertDateTime.getDateTime(
                        new Date(offbasepass.endAt),
                        "date"
                      )}
                    </div>
                    <div>
                      {convertDateTime.getDateTime(
                        new Date(offbasepass.endAt),
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
