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

export interface CalendarScheduleType {
  id: number;
  title: string;
  target: ScheduleTargetGrade[];
  attendees: ScheduleTargetGrade[];
  location: string;
  category: string;
  isReadOnly: boolean;
  borderColor: string;
  backgroundColor: string;
  start: string;
  end: string;
}
export interface ScheduleResponse extends Response {
  data: Schedule[];
}

export type ScheduleType = "ACADEMIC" | "HOLIDAY";

export type ScheduleTargetGrade =
  | "GRADE_1"
  | "GRADE_2"
  | "GRADE_3"
  | "GRADE_3"
  | "GRADE_ETC";
