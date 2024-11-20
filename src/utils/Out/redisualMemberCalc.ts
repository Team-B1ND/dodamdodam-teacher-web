import { OutListType } from "types/Out/out.type";

export const redisualMemberCalc = (data: OutListType[]) => {
  const allowedStudents =
    data?.filter((redisual) => redisual.status === 'ACTIVE').map((redisual) => redisual.student.name) || [];
  return allowedStudents;
};
