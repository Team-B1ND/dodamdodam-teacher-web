import { useRecoilState } from "recoil";
import {
  PointSelectedStudentInfoAtom,
  PointStudentIdsAtom,
} from "stores/Point/point.store";

const useSetPointStudentIds = () => {
  const [studentIds, setStudentIds] = useRecoilState(PointStudentIdsAtom);
  const [selectedStudent, setSelectedStudent] = useRecoilState(
    PointSelectedStudentInfoAtom
  );

  const onSetStudentList = (studentId: number, selectedStudentInfo: string) => {
    if (studentIds.includes(studentId)) {
      setStudentIds(studentIds.filter((item) => item !== studentId));
      setSelectedStudent(
        selectedStudent.filter((item) => item !== selectedStudentInfo)
      );
    } else {
      setStudentIds((prev) => [...prev, studentId]);
      setSelectedStudent((prev) => [...prev, selectedStudentInfo]);
    }
  };

  return { studentIds, onSetStudentList };
};

export default useSetPointStudentIds;
