import { NightStudyResponse } from "types/NightStudy/nightstudy.type";
import { changeRoom } from "utils/Member/changeGrade";

export const NightStudyAllowFilter = (
  NightStudyAllow: NightStudyResponse | undefined,
  studentName: string,
  NightStudyGrade: number,
  selectRoom: string
) => {
  return NightStudyAllow?.data
    .filter((data) => data.student.name.includes(studentName))
    .filter(
      (data) => data.student.grade === NightStudyGrade || NightStudyGrade === 0
    )

    .filter(
      (data) =>
        data.student.room === changeRoom(selectRoom) ||
        changeRoom(selectRoom) === 0
    )
    .sort((a, b) => {
      if (a.student.grade === b.student.grade) {
        if (a.student.room === b.student.room) {
          return a.student.number - b.student.number;
        }
        return a.student.room - b.student.room;
      }
      return a.student.grade - b.student.grade;
    });
};
