import { useState } from "react";
import profileImg from "assets/profileImg.svg";
import TableAttribute from "components/common/TableAttribute";
import { POINT_SCORE_ITEMS } from "../constant";
import { Button, TBody, TD } from "@b1nd/b1nd-dodamdodam-ui";
import {
  MemberImage,
  MemberTBody,
  MemberItemTR,
  MemberTD,
} from "components/Member/MemberItem/style";
import { useGetPointAllMemberQuery } from "queries/Point/query";
import styled, { CSSObject, css } from "styled-components";
import { useOpenStudentPointInfoModal } from "hooks/Point/useOpenStudentPointModal";

interface Props {
  pointQueryParam: string | null;
  onSetStudentList: (id: number) => void;
}

const PointScoreTable = ({ pointQueryParam }: Props) => {
  const { data: StudentPointScoreData } = useGetPointAllMemberQuery(
    pointQueryParam!
  );

  const { openStudentPointInfoModalOverlay } = useOpenStudentPointInfoModal();
  const [isClicked, setIsClicked] = useState(false);

  const onClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <TableAttribute constant={POINT_SCORE_ITEMS}>
      <TBody customStyle={MemberTBody}>
        {StudentPointScoreData?.data.map((data) => (
          <div>ㅎㅇ</div>
        ))}
      </TBody>
      <TR customStyle={MemberItemTR} isClicked={isClicked} onClick={onClick}>
        <TD customStyle={MemberTD}>
          <MemberImage src={profileImg} alt="이미지 없음" />
        </TD>
        <TD customStyle={MemberTD}>백승하</TD>
        <TD customStyle={MemberTD}>1학년 1반 1번</TD>
        <TD customStyle={MemberTD}>3점</TD>
        <TD customStyle={MemberTD}>3점</TD>
        <TD customStyle={MemberTD}>3점 </TD>
        <TD customStyle={MemberTD}>0점</TD>
        <TD>
          <Button
            ButtonType="disagree"
            onClick={() =>
              openStudentPointInfoModalOverlay({
                type: "modify",
                pointReasonId: 1,
              })
            }
          >
            더보기
          </Button>
        </TD>
      </TR>
    </TableAttribute>
  );
};

export default PointScoreTable;

const TR = styled.tr<{ customStyle?: CSSObject; isClicked: Boolean }>`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background-color: ${({ isClicked }) =>
    isClicked ? "rgba(0, 103, 188, 0.08)" : "#fff"};

  ${({ customStyle }) => customStyle}
`;
