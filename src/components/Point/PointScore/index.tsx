import PointScoreHeader from "./PointScoreHeader";
import PointScoreTable from "./PointScoreTable";
import PointProvider from "../PointProvider";
import { useSearchParams } from "react-router-dom";
import useGivePointStudent from "hooks/Point/useGivePointStudent";
import ErrorBoundary from "components/common/ErrorBoundary";
import { Suspense } from "react";
import SkeletonComponent from "components/common/Skeleton";

const PointScore = () => {
  const [searchParam] = useSearchParams();
  const pointQueryParam = searchParam.get("type");

  const {
    onSetStudentList,
    setStudentIds,
    onSubmitGivePointStudent,
    studentIds,
    onChangeIssueAt,
    issueAt,
    studentName,
  } = useGivePointStudent();

  return (
    <PointProvider
      title={pointQueryParam === "DORMITORY" ? " 기숙사 상벌점" : "학교 상벌점"}
      subTitle="학생 상벌점 조회, 발급, 삭제가 가능합니다."
    >
      <PointScoreHeader
        studentName={studentName}
        issueAt={issueAt}
        onChangeIssueAt={onChangeIssueAt}
        studentList={studentIds}
        pointQueryParam={pointQueryParam}
        onSubmitGivePointStudent={onSubmitGivePointStudent}
        setStudentIds={setStudentIds}
      />
      <ErrorBoundary fallback={<>error</>}>
        <Suspense fallback={<SkeletonComponent height={60} />}>
          <PointScoreTable
            studentList={studentIds}
            onSetStudentList={onSetStudentList}
            pointQueryParam={pointQueryParam}
          />
        </Suspense>
      </ErrorBoundary>
    </PointProvider>
  );
};

export default PointScore;
