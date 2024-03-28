import {
  PointReasonResponse,
  PointResponse,
  PointScoreForStudentResonse,
  PointType,
  PointValueType,
} from "types/Point/types";

export interface PointRepository {
  getPointAllMember(type: string): Promise<PointResponse>;
  getPointReason(type: string): Promise<PointReasonResponse>;
  createPointReason(param: CreatePointReasonParam): Promise<void>;
  deletePointReason(id: number): Promise<void>;
  givePoint(param: GivePointParam): Promise<void>;
  getPointByStudentId(
    param: GetPointByStudentIdParam
  ): Promise<PointScoreForStudentResonse>;
}

export interface CreatePointReasonParam {
  pointType: PointType;
  reason: string;
  score: number;
  scoreType: PointValueType;
}

export interface GivePointParam {
  issueAt: string;
  reasonId: number;
  studentIds: number[];
}

export interface GetPointByStudentIdParam {
  studentId: number;
  type: PointType | null;
}
