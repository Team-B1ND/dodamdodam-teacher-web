import { useState } from "react";
import { Flex } from "../../../common/Flex/Flex";
import {
  Button,
  ButtonWrapper,
  Select,
  TD,
  TR,
} from "@b1nd/b1nd-dodamdodam-ui";
import TableAttribute from "../../../common/TableAttribute";
import { POINT_REASON_ITEMS } from "../constant";
import { useGetPointReasonQuery } from "queries/Point/point.query";
import { PointReasonTR } from "./style";
import useDeletePointReason from "hooks/Point/useDeletePointReason";
import { PointType } from "types/Point/point.type";
import { truncateText } from "utils/common/truncate";
import { coverPointTypeToKorean } from "utils/Point/coverPointType";

interface PointReasonListProps {
  pointQueryParam: string | null;
}

const PointReasonList = ({ pointQueryParam }: PointReasonListProps) => {
  const [pointType, setPointType] = useState("전체보기");
  const { data: pointReasonDatas } = useGetPointReasonQuery(
    pointQueryParam as PointType
  );
  const { onDeletePointReason } = useDeletePointReason();

  return (
    <Flex customStyle={{ width: "60%" }} direction="column" gap={15}>
      <Select
        items={["전체보기", "상점", "벌점"]}
        onChange={setPointType}
        value={pointType}
      />
      <TableAttribute
        tableStyle={{ width: "95%" }}
        constant={POINT_REASON_ITEMS}
      >
        {pointReasonDatas?.data.map((data) => (
          <TR customStyle={PointReasonTR} key={data.id}>
            <TD customStyle={{ width: "20%" }}>
              {truncateText(data.reason, 25)}
            </TD>
            <TD customStyle={{ width: "15%" }}>
              {coverPointTypeToKorean(data.scoreType)}
            </TD>
            <TD>{data.score}점</TD>
            <TD>
              <ButtonWrapper>
                <Button ButtonType="agree">수정</Button>
                <Button
                  ButtonType="disagree"
                  onClick={() =>
                    onDeletePointReason(
                      data.id,
                      data.reason,
                      pointQueryParam as PointType
                    )
                  }
                >
                  삭제
                </Button>
              </ButtonWrapper>
            </TD>
          </TR>
        ))}
      </TableAttribute>
    </Flex>
  );
};

export default PointReasonList;
