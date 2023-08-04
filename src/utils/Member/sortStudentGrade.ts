import { StudentType } from "@src/types/Member/member.type";

export const sortStudentGrade = (
  student1: StudentType,
  student2: StudentType
) => {
  if (student1.classroom.grade > student2.classroom.grade) {
    return 1;
  }
  if (student1.classroom.grade < student2.classroom.grade) {
    return -1;
  }
  if (student1.classroom.room > student2.classroom.room) {
    return 1;
  }
  if (student1.classroom.room < student2.classroom.room) {
    return -1;
  }
  if (student1.number > student2.number) {
    return 1;
  }
  if (student1.number < student2.number) {
    return -1;
  }
  return 0;
};
