import PointScoreHeader from "./PointScoreHeader";
import PointScoreTable from "./PointScoreTable";
import PointProvider from "../PointProvider";
import { useSearchParams } from "react-router-dom";
import ErrorBoundary from "components/common/ErrorBoundary";
import { Suspense } from "react";

const PointScore = () => {
  const [searchParam] = useSearchParams();
  const pointQueryParam = searchParam.get("type");

  return (
    <PointProvider
      title={pointQueryParam === "DORMITORY" ? " 기숙사 상벌점" : "학교 상벌점"}
      subTitle="학생 상벌점 조회, 발급, 삭제가 가능합니다."
    >
      <ErrorBoundary text="포인트 헤더 에러" showButton={true}>
        <Suspense>
          <PointScoreHeader pointQueryParam={pointQueryParam!} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary text="포인트 조회 에러 " showButton={true}>
        <Suspense fallback={<>...loading</>}>
          <PointScoreTable pointQueryParam={pointQueryParam!} />
        </Suspense>
      </ErrorBoundary>
    </PointProvider>
  );
};

export default PointScore;
