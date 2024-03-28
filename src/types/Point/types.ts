import { Student } from "types/Member/member.type";
import { Response } from "types/util/response.type";

//type

export type PointValueType = "BONUS" | "MINUS" | "OFFSET";

export type PointType = "DORMITORY" | "SCHOOl";

export interface Point {
  id: number;
  bonus: number;
  minus: number;
  offset: number;
  type: PointType;
  student: Student;
}

export interface PointReason {
  id: number;
  reason: string;
  score: number;
  scoreType: PointValueType;
  pointType: PointType;
}

//response

export interface PointReasonResponse extends Response {
  data: PointReason[];
}

export interface PointResponse extends Response {
  data: Point[];
}

export interface PointScoreForStudentResonse extends Response {
  data: {
    id: number;
    student: Student;
    reason: PointReason;
    issueAt: string;
  }[];
}
