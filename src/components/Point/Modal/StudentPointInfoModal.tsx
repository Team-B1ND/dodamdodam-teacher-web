import {
  Button,
  TBody,
  TD,
  TH,
  THead,
  TR,
  Table,
} from "@b1nd/b1nd-dodamdodam-ui";
import * as S from "./style";
import { POINT_TABLE_ITEMS } from "./constant";
import ModalHeader from "components/common/Modal/ModalHeader";
import { useGetPointScoreByStudentIdQuery } from "queries/Point/query";
import { PointType } from "types/Point/types";
import dataTransform from "utils/Transform/dataTransform";

interface StudentPointInfoModalProps {
  close: () => void;
  studentId: number;
  pointType: PointType;
  studentName: string;
}

const StudentPointInfoModal = ({
  close,
  studentId,
  pointType,
  studentName,
}: StudentPointInfoModalProps) => {
  const { data: studentPointScoreData } = useGetPointScoreByStudentIdQuery({
    studentId,
    type: pointType,
  });

  return (
    <S.Container onClick={(e) => e.stopPropagation()}>
      <ModalHeader
        close={close}
        title={`${studentName} 님의 상벌점 정보입니다.`}
      />
      <Table customStyle={S.TableStyle}>
        <THead>
          <TR customStyle={S.TitleTRStyle}>
            {POINT_TABLE_ITEMS.map((item) => (
              <TH>{item}</TH>
            ))}
          </TR>
        </THead>
        <TBody customStyle={S.TBodyStyle}>
          {studentPointScoreData?.data.map((data) => (
            <TR
              customStyle={{
                width: "100%",
                marginTop: "10px",
                borderBottom: "1px solid #dcddde",
              }}
            >
              <TD>
                <S.ScoreTypeText scoreType={data.reason.scoreType}>
                  {
                    dataTransform.pointScoreTypeTransform(data.reason.scoreType)
                      .name
                  }
                </S.ScoreTypeText>
              </TD>
              <TD>{data.reason.score}점</TD>
              <TD>{data.reason.reason}</TD>
              <TD>{data.teacher.name}</TD>
              <TD>{data.issueAt}</TD>
            </TR>
          ))}
        </TBody>
      </Table>
    </S.Container>
  );
};

export default StudentPointInfoModal;
