import { Button, Select, TD, TR, Table } from "@b1nd/b1nd-dodamdodam-ui";
import { Flex } from "components/common/Flex/Flex";
import useCreatePointReason from "hooks/Point/useCreatePointReason";
import { PointReasonFormInput, PointReasonFormTD } from "./style";
import { PointType } from "types/Point/point.type";

interface Props {
  pointQueryParam: string | null;
}

const PointReasonForm = ({ pointQueryParam }: Props) => {
  const {
    scoreType,
    setScoreType,
    onChangePointReasonData,
    onSubmitPointReasonData,
    pointReasonData,
  } = useCreatePointReason();

  return (
    <Flex direction="column" gap={10}>
      사유등록
      <Table>
        <TR customStyle={{ border: "1px solid #dee2e6" }}>
          <TD customStyle={PointReasonFormTD}>사유내용</TD>
          <TD>
            <PointReasonFormInput
              placeholder="사유를 작성해주세요"
              name="reason"
              value={pointReasonData.reason}
              onChange={onChangePointReasonData}
            />
          </TD>
        </TR>
        <TR customStyle={{ border: "1px solid #dee2e6" }}>
          <TD customStyle={PointReasonFormTD}>점수</TD>
          <TD>
            <PointReasonFormInput
              placeholder="발급할 점수를 입력하세요"
              name="score"
              value={pointReasonData.score}
              onChange={onChangePointReasonData}
            />
          </TD>
        </TR>
        <TR customStyle={{ border: "1px solid #dee2e6" }}>
          <TD customStyle={PointReasonFormTD}>점수 타입</TD>
          <TD>
            <Select
              customStyle={{ width: "160px" }}
              items={["상점", "벌점", "상쇄점"]}
              onChange={setScoreType}
              value={scoreType || "타입을 선택해주세요"}
            />
          </TD>
        </TR>
      </Table>
      <Flex customStyle={{ width: "100%" }} justify="end">
        <Button
          onClick={() => onSubmitPointReasonData(pointQueryParam as PointType)}
          ButtonType="agree"
        >
          추가하기
        </Button>
      </Flex>
    </Flex>
  );
};

export default PointReasonForm;
