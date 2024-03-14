import { Student } from "types/Member/member.type";

export const sortStudentGrade = (student1: Student, student2: Student) => {
  if (student1?.grade > student2?.grade) {
    return 1;
  }
  if (student1?.grade < student2?.grade) {
    return -1;
  }
  if (student1?.room > student2?.room) {
    return 1;
  }
  if (student1?.room < student2?.room) {
    return -1;
  }
  if (student1?.number > student2?.number) {
    return 1;
  }
  if (student1?.number < student2?.number) {
    return -1;
  }
  return 0;
};
