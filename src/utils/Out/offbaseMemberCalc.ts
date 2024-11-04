import { OutListType } from "types/Out/out.type";

export const offBaseMemberCalc = (data: OutListType[]) => {
  const allowedStudents =
    data?.filter((offbase) => offbase.status === "ALLOWED").map((offbase) => offbase.student.name) || [];
  return allowedStudents;
};
