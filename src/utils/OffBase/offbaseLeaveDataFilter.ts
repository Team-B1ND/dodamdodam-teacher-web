import { OffBaseResponse } from "types/OffBasePass/offbasepass.type";

export const offBaseLeaveDataFilter = (
  OffBaseLeave: OffBaseResponse | undefined,
  studentName: string,
  selectGrade: number,
  selectApproval: string | undefined
) => {
  return OffBaseLeave?.data
    .filter((pass) => pass.student.name.includes(studentName))
    .filter((data) => data.student.grade === selectGrade || selectGrade === 0)
    .filter((data) => data.status === selectApproval || selectApproval === "")
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
