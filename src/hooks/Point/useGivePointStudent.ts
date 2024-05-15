import { ChangeEvent, useState } from "react";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import {
  useGetPointAllMemberQuery,
  useGivePointStudentQuery,
} from "queries/Point/point.query";
import { PointType, PointValueEnglishType } from "types/Point/point.type";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "queries/queryKey";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  PointSelectedStudentInfoAtom,
  PointStduentSearch,
  PointStudentIdsAtom,
} from "stores/Point/point.store";
import dateTransform from "utils/Transform/dateTransform";
import { pointTypeFormatToKorean } from "utils/Point/pointFormat";
import { AxiosError } from "axios";

const useGivePointStudent = (pointQueryParam: PointType) => {
  const { data: pointMemberData } = useGetPointAllMemberQuery(pointQueryParam);

  const queryClient = useQueryClient();
  const mutation = useGivePointStudentQuery();

  const [isFocused, setIsFocused] = useState(false);

  const [studentIds, setStudentIds] = useRecoilState(PointStudentIdsAtom);
  const [issueAt, setIssueAt] = useState(dateTransform.hyphen());
  const setSearchedStudent = useSetRecoilState(PointStduentSearch);
  const setSelectedStudentInfo = useSetRecoilState(
    PointSelectedStudentInfoAtom
  );

  const onChangeIssueAt = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setIssueAt(value);
  };

  const studentGrade = pointMemberData?.data
    .filter((data) => studentIds.includes(data.student.id))
    .map((data) => data.student.grade);

  const studentNumber = pointMemberData?.data
    .filter((data) => studentIds.includes(data.student.id))
    .map((data) => data.student.number);

  const studentRoom = pointMemberData?.data
    .filter((data) => studentIds.includes(data.student.id))
    .map((data) => data.student.room);

  const studentName = pointMemberData?.data
    .filter((data) => studentIds.includes(data.student.id))
    .map((data) => data.student.name);

  const selectedStudentInfo = `${studentGrade}학년 ${studentRoom}반 ${studentNumber}번 ${studentName}`;

  const onSubmitGivePointStudent = (
    reasonId: number,
    reasonType: PointValueEnglishType,
    reason: string,
    pointType: PointType,
    score: number,
    close: () => void
  ) => {
    mutation.mutate(
      {
        issueAt,
        reasonId,
        studentIds,
      },
      {
        onSuccess: () => {
          const handleReason = reason.split(":")[0];
          setStudentIds([]);
          setIssueAt("");
          setSearchedStudent("");
          setSelectedStudentInfo([]);
          queryClient.invalidateQueries(
            QUERY_KEYS.point.getAllMemberPoint(pointType)
          );

          B1ndToast.showSuccess(
            `${handleReason} 사유로 ${pointTypeFormatToKorean(
              reasonType
            )}이  ${score}점이 부여 되었습니다`
          );
          close();
        },
        onError: (error) => {
          const errorResponse = (error as AxiosError).response;
          B1ndToast.showError((errorResponse?.data as AxiosError).message);
        },
      }
    );
  };
  return {
    issueAt,
    onChangeIssueAt,
    onSubmitGivePointStudent,
    setIsFocused,
    isFocused,
  };
};

export default useGivePointStudent;
