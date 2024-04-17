import {
  PointReasonResponse,
  PointResponse,
  PointScoreForStudentResonse,
  PointType,
} from "types/Point/types";
import {
  CreatePointReasonParam,
  GetPointByStudentIdParam,
  GivePointParam,
  PointRepository,
} from "./point.repository";
import { dodamAxios } from "libs/Axios/customAxios";

class PointRepositoryImpl implements PointRepository {
  public async getPointAllMember(type: string): Promise<PointResponse> {
    const { data } = await dodamAxios.get(`/point/score/all?type=${type}`);
    return data;
  }

  public async getPointReason(type: PointType): Promise<PointReasonResponse> {
    const { data } = await dodamAxios.get(`/point/reason?type=${type}`);
    return data;
  }

  public async createPointReason(param: CreatePointReasonParam): Promise<void> {
    await dodamAxios.post("/point/reason", param);
  }

  public async deletePointReason(id: number): Promise<void> {
    await dodamAxios.delete(`/point/reason/${id}`);
  }

  public async givePoint(param: GivePointParam): Promise<void> {
    await dodamAxios.post("/point", param);
  }

  public async getPointByStudentId({
    studentId,
    type,
  }: GetPointByStudentIdParam): Promise<PointScoreForStudentResonse> {
    const { data } = await dodamAxios.get(
      `/point/student/${studentId}?type=${type}`
    );
    return data;
  }

  public async deletePointScore(id: number): Promise<Response> {
    const { data } = await dodamAxios.delete(`/point/${id}`);
    return data;
  }
}

export default new PointRepositoryImpl();
