import { Button, SearchBar, Select } from "@b1nd/b1nd-dodamdodam-ui";
import { useState } from "react";
import { Container } from "./style";
import { Flex } from "../../../common/Flex/Flex";
import { CiCircleCheck } from "react-icons/ci";
import { useGetPointReasonQuery } from "queries/Point/query";

interface Props {
  pointQueryParam: string | null;
  studentList: number[];
}

const PointScoreHeader = ({ pointQueryParam, studentList }: Props) => {
  const [grade, setGrade] = useState("전체보기");
  const [room, setRoom] = useState("전체보기");
  const [reason, setReason] = useState("");

  const { data } = useGetPointReasonQuery(pointQueryParam!);

  return (
    <Container>
      <Flex gap={5}>
        <Flex>
          <Select
            items={["전체보기", "1학년", "2학년", "3학년"]}
            value={grade || "학년을 선택해주세요"}
            onChange={setGrade}
          />
          <Select
            items={["전체보기", "1반", "2반", "3반", "4반"]}
            value={room || "학반을 선택해주세요"}
            onChange={setRoom}
          />
        </Flex>
        <SearchBar value="" />
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
          items={data ? data.data!.map((data) => data.reason) : [""]}
          value="사유를 선택해주세요"
          onChange={setReason}
        />
        <Button ButtonType="agree">점수발급</Button>
      </Flex>
    </Container>
  );
};

export default PointScoreHeader;
