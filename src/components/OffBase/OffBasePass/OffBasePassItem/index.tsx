import * as S from "./style";
import { useGetOffBasePassQuery } from "../../../../queries/OffBasePass/offbasepass.query";
import { Button, TBody, TD } from "@b1nd/b1nd-dodamdodam-ui";
import profileImg from "../../../../assets/profileImg.svg";
import useOffBasePass from "../../../../hooks/OffBase/OffBasePass/useOffBasePass";
import { useRecoilState } from "recoil";
import { SelectIdAtom } from "../../../../stores/OffBase/offbase.store";
import { offBaseDataFilter } from "../../../../utils/OffBasePass/offBaseDataFilter";

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
  const { data: offBasePass } = useGetOffBasePassQuery(uploadDate);
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
      {offBaseDataFilter(
        offBasePass,
        studentName,
        selectGrade,
        selectApproval
      )?.map((key) => (
        <TBody customStyle={S.OffBaseTBody}>
          <S.OffBaseTR
            onClick={() => {
              key.status === "PENDING" &&
                setSelectedIds((prevIds) =>
                  prevIds.includes(key.id)
                    ? prevIds.filter((id) => id !== key.id)
                    : [...prevIds, key.id]
                );
            }}
            style={{
              backgroundColor: selectedIds.includes(key.id) ? "#EEF3F9" : "",
            }}
          >
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
              {key.startOutDate.slice(0, 10)} {key.startOutDate.slice(11, 13)}시
              {key.startOutDate.slice(14, 16)}분
            </TD>
            <TD customStyle={S.OffBaseTD}>
              {key.endOutDate.slice(0, 10)} {key.endOutDate.slice(11, 13)}시
              {key.endOutDate.slice(14, 16)}분
            </TD>
            <TD customStyle={S.OffBaseTD}>{key.reason}</TD>
            <TD customStyle={S.ButtonContainerStyle}>
              {selectComponent(key.id)}
            </TD>
          </S.OffBaseTR>
        </TBody>
      ))}
    </>
  );
};

export default OffBasePassItem;
