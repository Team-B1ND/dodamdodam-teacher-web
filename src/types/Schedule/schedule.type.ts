import { Response } from "types/util/response.type";

export interface Schedule {
  id: number;
  name: string;
  place: string;
  type: ScheduleType;
  date: string[];
  targetGrades: ScheduleTargetGrade[];
}

export interface CalendarScheduleType {
  id: number;
  title: string;
  target: ScheduleTargetGrade[];
  attendees: ("1학년" | "2학년" | "3학년" | "전교생" | "기타")[];
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
  nextPage: number;
}

export type ScheduleType = "ACADEMIC" | "HOLIDAY";

export type ScheduleTargetGrade = "GRADE_1" | "GRADE_2" | "GRADE_3" | "GRADE_ALL" | "GRADE_ETC";
