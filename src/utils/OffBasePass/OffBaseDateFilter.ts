import { OffBaseResponse } from "../../types/OffBasePass/offbasepass.type";

export const OffBaseDataFilter = (
  OffBasePass: OffBaseResponse | undefined,
  studentName: string,
  selectGrade: number,
  selectApproval: string | undefined
) => {
  return OffBasePass?.data.outgoingList
    .filter((pass) => pass.student.member.name.includes(studentName))
    .filter(
      (data) =>
        data.student.classroom.grade === selectGrade || selectGrade === 0
    )
    .filter((data) => data.status === selectApproval || selectApproval === "");
};
