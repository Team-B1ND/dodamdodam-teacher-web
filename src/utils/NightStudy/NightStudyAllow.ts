import { NightStudyResponse } from "types/NightStudy/nightstudy.type";

export const NightStudyAllowFilter = (
  NightStudyAllow: NightStudyResponse | undefined,
  studentName: string,
  NightStudyGrade: number
) => {
  return NightStudyAllow?.data
    .filter((data) => data.student.name.includes(studentName))
    .filter(
      (data) => data.student.grade === NightStudyGrade || NightStudyGrade === 0
    );
};
