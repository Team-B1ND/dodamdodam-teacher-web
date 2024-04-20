import profileImg from "assets/profileImg.svg";
import TableAttribute from "components/common/TableAttribute";
import { POINT_SCORE_ITEMS } from "../constant";
import { Button, TBody, TD } from "@b1nd/b1nd-dodamdodam-ui";
import {
  MemberImage,
  MemberItemTR,
  MemberTD,
} from "components/Member/MemberItem/style";
import { useGetPointAllMemberQuery } from "queries/Point/point.query";
import styled, { CSSObject } from "styled-components";
import { useOpenStudentPointInfoModal } from "hooks/Point/useOpenStudentPointModal";
import { PointType } from "types/Point/types";
import { sortStudentGrade } from "utils/Member/sortStudentGrade";
import { searchName } from "utils/common/searchName";
import { useRecoilValue } from "recoil";
import {
  PointSelectGrade,
  PointSelectRoom,
  PointStduentSearch,
} from "stores/Point/point.store";
import { changeGrade, changeRoom } from "utils/Member/changeGrade";

interface Props {
  pointQueryParam: string | null;
  onSetStudentList: (id: number) => void;
  studentList: number[];
}

const PointScoreTable = ({
  pointQueryParam,
  onSetStudentList,
  studentList,
}: Props) => {
  const searchValue = useRecoilValue(PointStduentSearch);
  const selectGrade = useRecoilValue(PointSelectGrade);
  const selectRoom = useRecoilValue(PointSelectRoom);

  const { data: studentPointScoreData } = useGetPointAllMemberQuery(
    pointQueryParam!,
    { suspense: true }
  );

  const { openStudentPointInfoModalOverlay } = useOpenStudentPointInfoModal();

  return (
    <TableAttribute constant={POINT_SCORE_ITEMS}>
      <TBody customStyle={TBodyStyle}>
        {studentPointScoreData?.data
          .sort((student1, student2) =>
            sortStudentGrade(student1.student!, student2.student)
          )
          .filter(
            (data) =>
              data.student.grade === changeGrade(selectGrade) ||
              changeGrade(selectGrade) === 0
          )
          .filter(
            (data) =>
              data.student?.room === changeRoom(selectRoom) ||
              changeRoom(selectRoom) === 0
          )
          .filter((data) => searchName(data.student.name, searchValue))
          .map((data) => (
            <TR
              customStyle={MemberItemTR}
              isClicked={studentList.includes(data.student.id) ? true : false}
              onClick={() => {
                onSetStudentList(data.student.id);
              }}
            >
              <TD customStyle={MemberTD}>
                <MemberImage src={profileImg} alt="이미지 없음" />
              </TD>
              <TD customStyle={MemberTD}>{data.student.name}</TD>
              <TD customStyle={MemberTD}>
                {data.student.grade}학년 {data.student.room}반
                {data.student.number}번
              </TD>
              <TD customStyle={MemberTD}>{data.bonus}점</TD>
              <TD customStyle={MemberTD}>{data.minus}점</TD>
              <TD customStyle={MemberTD}>{data.offset}점 </TD>
              <TD customStyle={MemberTD}>
                {data.bonus - data.minus + data.offset}점
              </TD>

              <TD>
                <Button
                  ButtonType="disagree"
                  onClick={() =>
                    openStudentPointInfoModalOverlay({
                      studentName: data.student.name,
                      type: "studentInfo",
                      studentId: data.student.id,
                      pointType: pointQueryParam as PointType,
                    })
                  }
                >
                  더보기
                </Button>
              </TD>
            </TR>
          ))}
      </TBody>
    </TableAttribute>
  );
};

export default PointScoreTable;

const TR = styled.tr<{ customStyle?: CSSObject; isClicked: boolean }>`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  cursor: pointer;
  background-color: ${({ isClicked }) =>
    isClicked ? "rgba(0, 103, 188, .08)" : "#fff"};

  ${({ customStyle }) => customStyle}
`;

const TBodyStyle: CSSObject = {
  width: "100%",
  fontSize: "14px",
  fontWeight: "600",
  display: "flex",
  flexDirection: "column",
};
