import { Button, SearchBar, Select } from "@b1nd/b1nd-dodamdodam-ui";
import { CiCircleCheck } from "react-icons/ci";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Container } from "./style";
import { Flex } from "components/common/Flex/Flex";
import {
  PointSelectGrade,
  PointSelectRoom,
  PointSelectedStudentInfoAtom,
  PointStduentSearch,
  PointStudentIdsAtom,
} from "stores/Point/point.store";
import { useOpenStudentPointInfoModal } from "hooks/Point/useOpenStudentPointModal";
import { PointType } from "types/Point/point.type";
import styled from "styled-components";
import { Suspense } from "react";
import { PointDataToCsvData } from "utils/Transform/csvTransform";

interface Props {
  pointQueryParam: string | null;
}

const PointScoreHeader = ({ pointQueryParam }: Props) => {
  const [searchValue, setSearchValue] = useRecoilState(PointStduentSearch);
  const [grade, setGrade] = useRecoilState(PointSelectGrade);
  const [room, setRoom] = useRecoilState(PointSelectRoom);
  const [studentList, setStudentList] = useRecoilState(PointStudentIdsAtom);
  const setSelectedStudent = useSetRecoilState(PointSelectedStudentInfoAtom);
  const { openStudentPointInfoModalOverlay } = useOpenStudentPointInfoModal();
  const { csvData } = PointDataToCsvData(pointQueryParam!);

  return (
    <Suspense fallback={<>...loading</>}>
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
              items={["모든 학반", "1반", "2반", "3반", "4반"]}
              value={room || "학반을 선택해주세요"}
              onChange={setRoom}
            />
          </Flex>
          <SearchBar value={searchValue} onChange={setSearchValue} />
          <Flex gap={7} align="center">
            {studentList.length > 0 && (
              <>
                <CiCircleCheck
                  onClick={() => {
                    setStudentList([]);
                    setSelectedStudent([]);
                  }}
                  style={{
                    width: "30px",
                    height: "30px",
                    color: "rgba(0, 103, 188, 0.8)",
                    cursor: "pointer",
                  }}
                />
                <p>{studentList.length} 명 선택됨</p>
              </>
            )}
          </Flex>
          <Button
            ButtonType="agree"
            style={{ width: "120px" }}
            onClick={() => {
              openStudentPointInfoModalOverlay({
                type: "givePoint",
                pointType: pointQueryParam as PointType,
              });
            }}
          >
            점수발급하기
          </Button>
        </Flex>
        <CsvButtonContainer>
          {/* <CsvButton csvData={csvData} fileName="상벌점 목록" /> */}
        </CsvButtonContainer>
      </Container>
    </Suspense>
  );
};

export default PointScoreHeader;

const CsvButtonContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
`;
