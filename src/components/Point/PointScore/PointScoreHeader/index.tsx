import { Button, SearchBar, Select } from "@b1nd/b1nd-dodamdodam-ui";
import React, { useState } from "react";
import { Container } from "./style";
import { Flex } from "../../../common/Flex/Flex";
import { useGetPointReasonQuery } from "queries/Point/query";

const PointScoreHeader = () => {
  const [state, setState] = useState("");
  return (
    <Container>
      <Flex gap={5}>
        <Flex>
          <Select
            items={["학년 전체보기", "1학년", "2학년", "3학년"]}
            value="학년 전체보기"
            onChange={setState}
          />
          <Select
            items={["학반 전체보기", "1반", "2반", "3반", "4반"]}
            value="학반 전체보기"
            onChange={setState}
          />
        </Flex>
        <SearchBar value="" />
      </Flex>
      <Flex gap={5}>
        <Select
          customStyle={{ width: "500px" }}
          items={[""]}
          value="사유를 선택해주세요"
          onChange={setState}
        />
        <Button ButtonType="agree">점수발급</Button>
      </Flex>
    </Container>
  );
};

export default PointScoreHeader;
