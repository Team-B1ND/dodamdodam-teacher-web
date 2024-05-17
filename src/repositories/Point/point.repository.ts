import {
  PointReasonResponse,
  PointResponse,
  PointScoreForStudentResonse,
  PointType,
  PointValueEnglishType,
} from "types/Point/point.type";

export interface PointRepository {
  getPointAllMember(type: string): Promise<PointResponse>;
  getPointReason(type: string): Promise<PointReasonResponse>;
  createPointReason(param: CreatePointReasonParam): Promise<void>;
  deletePointReason(id: number): Promise<void>;
  deletePointScore(id: number): Promise<Response>;
  givePoint(param: GivePointParam): Promise<void>;
  getPointByStudentId(
    param: GetPointByStudentIdParam
  ): Promise<PointScoreForStudentResonse>;
}

export interface CreatePointReasonParam {
  pointType: PointType;
  reason: string;
  score: number;
  scoreType: PointValueEnglishType;
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
