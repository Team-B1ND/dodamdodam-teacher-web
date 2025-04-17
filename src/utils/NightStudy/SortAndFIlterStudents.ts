import {sortStudentGrade} from "../Member/sortStudentGrade";
import {searchName} from "../common/searchName";
import {StudentBanType} from "types/NightStudy/nightstudy.type";

export const sortAndFilterStudents = (
  studentsInfo: StudentBanType[],
  searchValue: string,
  selectGrade: number,
  isBan?: boolean | null
) => {
  return studentsInfo
    .sort((student1, student2) =>
      sortStudentGrade(student1!, student2!)
    )
    .sort((a, b) => {
      const gradeA = a.grade || 0;
      const gradeB = b.grade || 0;
      const roomA = a.room || 0;
      const roomB = b.room || 0;
      const numberA = a.number || 0;
      const numberB = b.number || 0;

      if (gradeA === gradeB) {
        if (roomA === roomB) {
          return numberA - numberB;
        }
        return roomA - roomB;
      }
      return gradeA - gradeB;
    })

    .filter((data) => data.grade === selectGrade || selectGrade === 0)
    .filter((data) => searchName(data.name, searchValue))
    .filter((data) => isBan == null ? true : isBan ? data.isBanned : !data.isBanned )
};
