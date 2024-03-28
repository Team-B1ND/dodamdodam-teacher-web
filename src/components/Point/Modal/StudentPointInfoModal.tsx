import { Flex } from "components/common/Flex/Flex";
import { TBody, TD, TH, THead, TR, Table } from "@b1nd/b1nd-dodamdodam-ui";
import * as S from "./style";
import {
  BONUS_INFO_COLUMS,
  MINUS_INFO_COLUMS,
  OFFSET_INFO_COLUMS,
} from "./constant";
import ModalHeader from "components/common/Modal/ModalHeader";
import { useGetPointScoreByStudentIdQuery } from "queries/Point/query";
import { PointType } from "types/Point/types";

interface Props {
  close: () => void;
  studentId: number;
  pointType: PointType;
}

const StudentPointInfoModal = ({ close, studentId, pointType }: Props) => {
  const { data: studentPointScoreData } = useGetPointScoreByStudentIdQuery({
    studentId,
    type: pointType,
  });

  return (
    <S.Container onClick={(e) => e.stopPropagation()}>
      <ModalHeader close={close} title={`님의 상벌점 정보입니다.`} />
      <Flex direction="column" gap={30} customStyle={{ marginTop: "15px" }}>
        <>{/* api 변경시 수정 필요 */}</>
      </Flex>
    </S.Container>
  );
};

export default StudentPointInfoModal;
