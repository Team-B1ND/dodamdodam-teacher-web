import React from "react";
import TableAttribute from "../../../common/TableAttribute";
import { POINT_SCORE_ITEMS } from "../constant";
import { Button, TBody, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import { MemberImage } from "components/Member/MemberItem/style";
import { MemberTBody } from "components/Member/MemberItem/style";
import { MemberItemTR } from "components/Member/MemberItem/style";
import { MemberTD } from "components/Member/MemberItem/style";
import profileImg from "assets/profileImg.svg";
import { useGetPointAllMemberQuery } from "queries/Point/query";

const PointScoreTable = () => {
  const { data } = useGetPointAllMemberQuery();

  return (
    <TableAttribute constant={POINT_SCORE_ITEMS}>
      <TBody customStyle={MemberTBody}>
        <TR customStyle={MemberItemTR}>
          <TD customStyle={MemberTD}>
            <MemberImage src={profileImg} alt="이미지 없음" />
          </TD>
          <TD customStyle={MemberTD}>백승하</TD>
          <TD customStyle={MemberTD}>1학년 1반 1번</TD>
          <TD customStyle={MemberTD}>0점</TD>
          <TD customStyle={MemberTD}>0점</TD>
          <TD customStyle={MemberTD}>0점 </TD>
          <TD customStyle={MemberTD}>0점</TD>
          <TD>
            <Button ButtonType="disagree">더보기</Button>
          </TD>
        </TR>
      </TBody>
    </TableAttribute>
  );
};

export default PointScoreTable;
