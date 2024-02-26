import { Response } from "types/util/response.type";

export interface Schedule {
  id: number;
  name: string;
  place: string;
  type: ScheduleType;
  startDate: string;
  endDate: string;
  targetGrades: ScheduleTargetGrade[];
}

export interface ScheduleResponse extends Response {
  data: Schedule[];
}

export type ScheduleType = "ACADEMIC" | "HOLIDAY";

export type ScheduleTargetGrade =
  | "GRADE_1"
  | "Grade_2"
  | "Grade_3"
  | "Grade_ALL"
  | "Grade_ETC";
