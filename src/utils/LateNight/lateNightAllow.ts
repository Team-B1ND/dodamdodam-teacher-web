import { LateNightResponse } from "../../types/LateNight/latenight.type";

export const LateNightAllowFilter = (
  LateNightAllow: LateNightResponse | undefined,
  studentName: string,
  lateNightGrade: number
) => {
  return LateNightAllow?.data
    .filter((data) => data.student.name.includes(studentName))
    .filter(
      (data) => data.student.grade === lateNightGrade || lateNightGrade === 0
    );
};
