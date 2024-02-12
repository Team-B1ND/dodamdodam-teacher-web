import * as S from "./style";
import { useGetOffBasePassQuery } from "../../../../queries/OffBasePass/offbasepass.query";
import { Button, TBody, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import profileImg from "../../../../assets/profileImg.svg";

interface OffBasePassProps {
  studentName: string;
  uploadDate: string;
}

const OffBasePassItem = ({ studentName, uploadDate }: OffBasePassProps) => {
  const { data: OffBaswPass } = useGetOffBasePassQuery({
    date: uploadDate,
  });

  return (
    <TBody customStyle={S.OffBaseTBody}>
      {OffBaswPass?.data.outgoingList.map((key) => (
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
            {key.startOutDate.slice(0, 10)} {key.startOutDate.slice(11, 13)}시
            {key.startOutDate.slice(14, 16)}분
          </TD>
          <TD customStyle={S.OffBaseTD}>
            {key.endOutDate.slice(0, 10)} {key.endOutDate.slice(11, 13)}시
            {key.endOutDate.slice(14, 16)}분
          </TD>
          <TD customStyle={S.OffBaseTD}>{key.reason}</TD>
          <TD customStyle={S.ButtonContainerStyle}>
            <Button ButtonType="agree" style={S.EditStyle}>
              승인
            </Button>
            <Button ButtonType="disagree" style={S.DelStyle}>
              거절
            </Button>
          </TD>
        </TR>
      ))}
    </TBody>
  );
};

export default OffBasePassItem;
