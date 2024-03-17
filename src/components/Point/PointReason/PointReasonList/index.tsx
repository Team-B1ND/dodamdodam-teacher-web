import { useEffect, useState } from "react";
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
import { useGetPointReasonQuery } from "queries/Point/query";
import { PointReasonTR } from "./style";
import useDeletePointReason from "hooks/Point/useDeletePointReason";

const PointReasonList = () => {
  const [pointType, setPointType] = useState("전체보기");
  const [pointTypeName, setPointTypeName] = useState("BONUS");
  const { data } = useGetPointReasonQuery(pointTypeName);
  const { onDeletePointReason } = useDeletePointReason();
  useEffect(() => {
    switch (pointType) {
      case "전체보기":
        setPointTypeName("BONUS");
        break;
      case "벌점":
        setPointTypeName("MINUS");
        break;

      case "상점":
        setPointTypeName("BONUS");
        break;

      default:
        setPointTypeName("BONUS");
        break;
    }
  }, [pointType]);

  return (
    <Flex direction="column" gap={15}>
      <Select
        items={["전체보기", "상점", "벌점"]}
        onChange={setPointType}
        value={pointType}
      />
      <TableAttribute
        tableStyle={{ width: "95%" }}
        constant={POINT_REASON_ITEMS}
      >
        {/* {data?.data ? (
          data.data.pointReason.map((data) => (
            <TR customStyle={PointReasonTR}>
              <TD customStyle={{ width: "15%" }}>{data.name}</TD>
              <TD customStyle={{ width: "15%" }}>
                {data.type === 2 ? "벌점" : "상점"}
              </TD>
              <TD>{data.point}점</TD>
              <TD>
                <ButtonWrapper>
                  <Button ButtonType="agree">수정</Button>
                  <Button
                    ButtonType="disagree"
                    onClick={() => onDeletePointReason(data.idx, data.name)}
                  >
                    삭제
                  </Button>
                </ButtonWrapper>
              </TD>
            </TR>
          ))
        ) : (
          <div>error</div>
        )} */}
      </TableAttribute>
    </Flex>
  );
};

export default PointReasonList;
