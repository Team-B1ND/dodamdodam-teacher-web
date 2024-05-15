import { Button, ButtonWrapper, Select } from "@b1nd/b1nd-dodamdodam-ui";
import { useState } from "react";
import * as S from "./style";
import ModalHeader from "components/common/Modal/ModalHeader";
import { Flex } from "components/common/Flex/Flex";
import useGivePointStudent from "hooks/Point/useGivePointStudent";
import { useGetPointReasonQuery } from "queries/Point/point.query";
import { PointType } from "types/Point/point.type";
import { useRecoilValue } from "recoil";
import { PointSelectedStudentInfoAtom } from "stores/Point/point.store";
import { pointTypeFormatToKorean } from "utils/Point/pointFormat";

interface StudentPointInfoModalProps {
  close: () => void;
  title: string;
  pointQueryParam: PointType;
}

const GivePointStudentModal = ({
  pointQueryParam,
  close,
  title,
}: StudentPointInfoModalProps) => {
  const {
    issueAt,
    onChangeIssueAt,
    onSubmitGivePointStudent,
    isFocused,
    setIsFocused,
  } = useGivePointStudent(pointQueryParam as PointType);
  const [reason, setReason] = useState("");

  const { data: pointReasonsData } = useGetPointReasonQuery(
    pointQueryParam as PointType
  );

  const selectedStudentList = useRecoilValue(PointSelectedStudentInfoAtom);

  const reasonId = pointReasonsData?.data.find((pointReason) => {
    const handleReason = reason.split(":")[0];
    return pointReason.reason === handleReason;
  })?.id;

  const reasonType = pointReasonsData?.data.find(
    (pointReason) => pointReason.reason === reason
  )?.scoreType;

  const score = pointReasonsData?.data.find((pointReason) => {
    const handleReason = reason.split(":")[0];
    return pointReason.reason === handleReason;
  })?.score;

  return (
    <S.Container onClick={(e) => e.stopPropagation()}>
      <ModalHeader close={close} title={title} />
      <Flex direction="column" gap={50}>
        <Flex
          direction="column"
          gap={5}
          customStyle={{ width: "100%", lineHeight: "20px" }}
        >
          부여 학생
          <S.UnderLine />
          {selectedStudentList.map((name) => (
            <span>{name}</span>
          ))}
        </Flex>
        <Flex direction="column" gap={5} customStyle={{ width: "100%" }}>
          부여 날짜
          <S.UnderLine />
          <S.DateInput
            type="date"
            isFocus={isFocused}
            value={issueAt}
            onChange={onChangeIssueAt}
            onClick={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </Flex>
        <Flex direction="column" gap={5} customStyle={{ width: "100%" }}>
          부여 사유
          <S.UnderLine />
          <Select
            customStyle={{ width: "400px" }}
            items={
              pointReasonsData
                ? pointReasonsData.data!.map(
                    (data) =>
                      data.reason +
                      ":" +
                      ` ${pointTypeFormatToKorean(data.scoreType)}` +
                      `${data.score}점`
                  )
                : []
            }
            value={reason || "사유를 선택해주세요"}
            onChange={setReason}
          />
        </Flex>
        <Flex>
          <ButtonWrapper>
            <Button
              ButtonType="agree"
              onClick={() => {
                onSubmitGivePointStudent(
                  reasonId!,
                  reasonType!,
                  reason,
                  pointQueryParam,
                  score!,
                  close
                );
              }}
            >
              발급하기
            </Button>
            <Button ButtonType="disagreed" onClick={close}>
              취소
            </Button>
          </ButtonWrapper>
        </Flex>
      </Flex>
    </S.Container>
  );
};

export default GivePointStudentModal;
