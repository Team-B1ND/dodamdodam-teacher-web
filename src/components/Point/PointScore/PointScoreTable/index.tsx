import profileImg from "assets/profileImg.svg";
import TableAttribute from "components/common/TableAttribute";
import { POINT_SCORE_ITEMS } from "../constant";
import { Button, TBody, TD } from "@b1nd/b1nd-dodamdodam-ui";
import { MemberImage, MemberItemTR, MemberTD } from "components/Member/MemberItem/style";
import styled, { CSSObject } from "styled-components";
import { useOpenStudentPointInfoModal } from "hooks/Point/useOpenStudentPointModal";
import { PointType } from "types/Point/point.type";
import useSetPointStudentIds from "hooks/Point/useSetPointStudentIds";
import { PointDataToCsvData } from "utils/Transform/csvTransform";
import { Suspense } from "react";

interface Props {
  pointQueryParam: string;
}

const PointScoreTable = ({ pointQueryParam }: Props) => {
  const { onSetStudentList, studentIds } = useSetPointStudentIds();
  const { pointData } = PointDataToCsvData(pointQueryParam);
  const { openStudentPointInfoModalOverlay } = useOpenStudentPointInfoModal();

  return (
    <Suspense fallback={<>...loading</>}>
      <TableAttribute constant={POINT_SCORE_ITEMS}>
        <TBody customStyle={TBodyStyle}>
          {pointData?.map((data) => (
            <TR
              customStyle={MemberItemTR}
              isClicked={studentIds.includes(data.student.id) ? true : false}
              onClick={() => {
                onSetStudentList(
                  data.student.id,
                  `${data.student.grade}학년 ${data.student.room}반 ${data.student.number}번 ${data.student.name}`,
                );
              }}
            >
              <TD customStyle={MemberTD}>
                <MemberImage src={profileImg} alt="이미지 없음" />
              </TD>
              <TD customStyle={MemberTD}>{data.student.name}</TD>
              <TD customStyle={MemberTD}>
                {data.student.grade}학년 {data.student.room}반{data.student.number}번
              </TD>
              <TD customStyle={MemberTD}>{data.bonus}점</TD>
              <TD customStyle={MemberTD}>{data.minus}점</TD>
              <TD customStyle={MemberTD}>{data.offset}점 </TD>
              <TD customStyle={MemberTD}>{data.bonus - data.minus + data.offset}점</TD>
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
    </Suspense>
  );
};

export default PointScoreTable;

const TR = styled.tr<{ customStyle?: CSSObject; isClicked: boolean }>`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  cursor: pointer;
  background-color: ${({ isClicked }) => (isClicked ? "rgba(0, 103, 188, .08)" : "#fff")};

  ${({ customStyle }) => customStyle}
`;

const TBodyStyle: CSSObject = {
  width: "100%",
  fontSize: "14px",
  fontWeight: "600",
  display: "flex",
  flexDirection: "column",
};
