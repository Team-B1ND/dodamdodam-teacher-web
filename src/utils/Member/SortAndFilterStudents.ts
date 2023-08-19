import { StudentType } from "@src/types/Member/member.type";
import { searchName } from "../common/searchName";
import { sortStudentGrade } from "./sortStudentGrade";

export const sortAndFilterStudents = (
  studentsInfo: StudentType[],
  searchValue: string,
  selectValue: number
) => {
  return studentsInfo
    .sort((student1, student2) => sortStudentGrade(student1, student2))
    .filter((data) => data.classroom.grade === selectValue || selectValue === 0)
    .filter((data) => searchName(data.member.name, searchValue));
};
