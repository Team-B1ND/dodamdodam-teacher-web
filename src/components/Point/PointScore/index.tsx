import PointScoreHeader from "./PointScoreHeader";
import PointScoreTable from "./PointScoreTable";
import PointProvider from "../PointProvider";
import { useSearchParams } from "react-router-dom";
import useGivePointStudent from "hooks/Point/useGivePointStudent";

const PointScore = () => {
  const [searchParam] = useSearchParams();
  const pointQueryParam = searchParam.get("type");

  const { onSetStudentList, onSubmitGivePointStudent, studentIds } =
    useGivePointStudent();

  return (
    <PointProvider
      title={pointQueryParam === "DORMITORY" ? " 기숙사 상벌점" : "학교 상벌점"}
      subTitle="학생 상벌점 조회, 발급, 삭제가 가능합니다."
    >
      <PointScoreHeader
        studentList={studentIds}
        pointQueryParam={pointQueryParam}
        onSubmitGivePointStudent={onSubmitGivePointStudent}
      />
      <PointScoreTable
        studentList={studentIds}
        onSetStudentList={onSetStudentList}
        pointQueryParam={pointQueryParam}
      />
    </PointProvider>
  );
};

export default PointScore;
