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
  student: {
    id: number;
    name: string;
    grade: number;
    room: number;
    number: number;
  };
}

//response

export interface PointReasonResponse extends Response {
  data: {
    id: number;
    reason: string;
    score: number;
    type: PointValueType;
    place: PointType;
  }[];
}

export interface PointResponse extends Response {
  data: Point[];
}

export interface PointScoreForStudentResonse extends Response {
  data: {
    id: number;
    student: {
      id: number;
      name: string;
      grade: number;
      room: number;
      number: number;
    };
    reason: {
      id: number;
      reason: string;
      score: number;
      scoreType: PointValueType;
      pointType: PointType;
    };
    issueAt: string;
  };
}
