import {
  Button,
  ButtonWrapper,
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
import {
  useDeleteStudentPointScoreMutation,
  useGetPointScoreByStudentIdQuery,
} from "queries/Point/point.query";
import { PointType } from "types/Point/types";
import dataTransform from "utils/Transform/dataTransform";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "queries/queryKey";

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
  const queryClient = useQueryClient();
  const mutation = useDeleteStudentPointScoreMutation();

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
              <TD>
                <ButtonWrapper>
                  <Button
                    ButtonType="agree"
                    onClick={() => window.alert("열심히 개발중입니다")}
                  >
                    수정
                  </Button>
                  <Button
                    ButtonType="cancel"
                    onClick={() =>
                      mutation.mutate(data.id, {
                        onSuccess: () => {
                          queryClient.invalidateQueries(
                            QUERY_KEYS.point.getPointScoreByStudentId(studentId)
                          );
                          B1ndToast.showSuccess(
                            "상벌점 기록이 삭제 되었습니다"
                          );
                        },
                      })
                    }
                  >
                    삭제
                  </Button>
                </ButtonWrapper>
              </TD>
            </TR>
          ))}
        </TBody>
      </Table>
    </S.Container>
  );
};

export default StudentPointInfoModal;
