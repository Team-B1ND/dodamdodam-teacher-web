import { StudentAndTeacher } from "types/Member/member.type";
import { searchName } from "../common/searchName";
import { sortStudentGrade } from "./sortStudentGrade";

export const sortAndFilterStudents = (
  studentsInfo: StudentAndTeacher[],
  searchValue: string,
  selectGrade: number
) => {
  return studentsInfo
    .sort((student1, student2) =>
      sortStudentGrade(student1.student!, student2.student!)
    )
    .filter((data) => data.student?.grade === selectGrade || selectGrade === 0)
    .filter((data) => searchName(data.name, searchValue));
};
