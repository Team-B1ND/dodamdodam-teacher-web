import { useState } from "react";
import { Button, SearchBar, Select } from "@b1nd/b1nd-dodamdodam-ui";
import { CiCircleCheck } from "react-icons/ci";
import { useRecoilState } from "recoil";
import { Container } from "./style";
import { Flex } from "components/common/Flex/Flex";
import { useGetPointReasonQuery } from "queries/Point/point.query";
import { PointType, PointValueType } from "types/Point/types";
import {
  PointSelectGrade,
  PointSelectRoom,
  PointStduentSearch,
} from "stores/Point/point.store";

interface Props {
  pointQueryParam: string | null;
  studentList: number[];
  onSubmitGivePointStudent: (
    reasonId: number,
    reasonType: PointValueType,
    reason: string,
    pointType: PointType
  ) => void;
}

const PointScoreHeader = ({
  pointQueryParam,
  studentList,
  onSubmitGivePointStudent,
}: Props) => {
  const [searchValue, setSearchValue] = useRecoilState(PointStduentSearch);
  const [grade, setGrade] = useRecoilState(PointSelectGrade);
  const [room, setRoom] = useRecoilState(PointSelectRoom);
  const [reason, setReason] = useState("");

  const { data: pointReasonsData } = useGetPointReasonQuery(
    pointQueryParam as PointType
  );

  const reasonId = pointReasonsData?.data.find(
    (pointReason) => pointReason.reason === reason
  )?.id;

  const reasonType = pointReasonsData?.data.find(
    (pointReason) => pointReason.reason === reason
  )?.scoreType;

  return (
    <Container>
      <Flex gap={5}>
        <Flex>
          <Select
            customStyle={{ minWidth: "95px" }}
            items={["전체보기", "1학년", "2학년", "3학년"]}
            value={grade || "학년을 선택해주세요"}
            onChange={setGrade}
          />
          <Select
            customStyle={{ minWidth: "95px" }}
            items={["전체보기", "1반", "2반", "3반", "4반"]}
            value={room || "학반을 선택해주세요"}
            onChange={setRoom}
          />
        </Flex>
        <SearchBar value={searchValue} onChange={setSearchValue} />
      </Flex>
      <Flex gap={5} align="center">
        {studentList.length > 0 && (
          <>
            <CiCircleCheck
              style={{
                width: "30px",
                height: "30px",
                color: "rgba(0, 103, 188, 0.8)",
              }}
            />
            <p>{studentList.length} 명 선택됨</p>
          </>
        )}

        <Select
          customStyle={{ width: "500px" }}
          items={
            pointReasonsData
              ? pointReasonsData.data!.map(
                  (data) => data.reason + data.scoreType
                )
              : []
          }
          value={reason || "사유를 선택해주세요"}
          onChange={setReason}
        />
        <Button
          ButtonType="agree"
          onClick={() =>
            onSubmitGivePointStudent(
              reasonId!,
              reasonType!,
              reason!,
              pointQueryParam as PointType
            )
          }
        >
          점수발급
        </Button>
      </Flex>
    </Container>
  );
};

export default PointScoreHeader;
