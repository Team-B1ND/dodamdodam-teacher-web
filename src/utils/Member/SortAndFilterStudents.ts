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
    .sort((a, b) => {
      const gradeA = a.student?.grade || 0;
      const gradeB = b.student?.grade || 0;
      const roomA = a.student?.room || 0;
      const roomB = b.student?.room || 0;
      const numberA = a.student?.number || 0;
      const numberB = b.student?.number || 0;

      if (gradeA === gradeB) {
        if (roomA === roomB) {
          return numberA - numberB;
        }
        return roomA - roomB;
      }
      return gradeA - gradeB;
    })

    .filter((data) => data.student?.grade === selectGrade || selectGrade === 0)
    .filter((data) => searchName(data.name, searchValue));
};
