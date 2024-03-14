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
    .filter((data) => data.status === selectApproval || selectApproval === "");
};
