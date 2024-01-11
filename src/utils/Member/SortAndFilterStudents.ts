import { StudentType } from "../../types/Member/Member.type";
import { searchName } from "../common/searchName";
import { sortStudentGrade } from "./sortStudentGrade";

export const sortAndFilterStudents = (
  studentsInfo: StudentType[],
  searchValue: string,
  selectGrade: number
) => {
  return studentsInfo
    .sort((student1, student2) => sortStudentGrade(student1, student2))
    .filter((data) => data.classroom.grade === selectGrade || selectGrade === 0)
    .filter((data) => searchName(data.member.name, searchValue));
};
