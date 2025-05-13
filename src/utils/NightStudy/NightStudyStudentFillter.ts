import { ProjectStudentsResponse } from "types/NightStudy/nightstudy.type";
import { changeRoom } from "utils/Member/changeGrade";

export const NightStudyStudentFillter = (
  NightStudyStudents: ProjectStudentsResponse| undefined,
  studentName: string,
  NightStudyGrade: number,
  selectRoom: string
) => {
  return NightStudyStudents?.data
    .filter((data) => data.name.includes(studentName))
    .filter(
      (data) => data.grade === NightStudyGrade || NightStudyGrade === 0
    )

    .filter(
      (data) =>
        data.room === changeRoom(selectRoom) ||
        changeRoom(selectRoom) === 0
    )
    .sort((a, b) => {
      if (a.grade === b.grade) {
        if (a.room === b.room) {
          return a.number - b.number;
        }
        return a.room - b.room;
      }
      return a.grade - b.grade;
    });
};
