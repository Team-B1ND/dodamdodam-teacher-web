import { OutListType } from "types/OffBasePass/offbasepass.type";

export const offBaseMemberCalc = (data: OutListType[]) => {
  const allowedStudents =
    data?.filter((offbase) => offbase.status === "ALLOWED").map((offbase) => offbase.student.name) || [];
  return allowedStudents;
};
