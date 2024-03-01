import { PointReasonResponse, PointResponse } from "types/Point/types";

export interface PointRepository {
  getPointAllMember(): Promise<PointResponse>;
  getPointReason(type: string): Promise<PointReasonResponse>;
  createPointReason(param: CreatePointReasonParam): Promise<void>;
  deletePointReason(id: number): Promise<void>;
  givePoint(param: GivePointParam): Promise<void>;
}

export interface CreatePointReasonParam {
  pointPlace: "DORMITORY" | "SCHOOL";
  reason: string;
  score: string;
  type: "BONUS" | "MINUS" | "OFFSET";
}

export interface GivePointParam {
  givenDate: string;
  place: "DORMITORY" | "SCHOOL";
  reason: string;
  score: number;
  studentId: number[];
  type: "BONUS" | "MINUS" | "OFFSET";
}
