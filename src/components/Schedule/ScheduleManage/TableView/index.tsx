import {
  Button,
  ButtonWrapper,
  TBody,
  TD,
  TH,
  TR,
  Table,
} from "@b1nd/b1nd-dodamdodam-ui";
import { SCHEDULE_TABLE_ITEMS } from "components/Schedule/constant";
import TableAttribute from "components/common/TableAttribute";
import { useGetSchedulesQuery } from "queries/Schedule/query";

const TableView = () => {
  const { data } = useGetSchedulesQuery({ limit: 10, page: 1 });

  return (
    <TableAttribute constant={SCHEDULE_TABLE_ITEMS}>
      <TBody>
        <TR customStyle={{ width: "100%" }}>
          <TD>
            <Button ButtonType="agree">학사일정</Button>
          </TD>
          <TD>기능 경기 대회</TD>
          <TD>1학년</TD>
          <TD>장소가 없습니다.</TD>

          <TD>2024년 02월 21일 00시 00분</TD>
          <TD>2024년 02월 21일 00시 00분</TD>
          <TD>
            <ButtonWrapper>
              <Button ButtonType="agree">수정</Button>
              <Button ButtonType="disagreed">삭제</Button>
            </ButtonWrapper>
          </TD>
        </TR>
      </TBody>
    </TableAttribute>
  );
};

export default TableView;
