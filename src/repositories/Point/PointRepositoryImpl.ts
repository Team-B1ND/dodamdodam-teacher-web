import { PointReasonResponse, PointResponse } from "types/Point/types";
import {
  CreatePointReasonParam,
  GivePointParam,
  PointRepository,
} from "./PointRepository";
import { dodamTeacherAxios } from "libs/Axios/customAxios";

class PointRepositoryImpl implements PointRepository {
  public async getPointAllMember(): Promise<PointResponse> {
    const { data } = await dodamTeacherAxios.get("/point/all/member");
    return data;
  }

  public async getPointReason(type: string): Promise<PointReasonResponse> {
    const { data } = await dodamTeacherAxios.get(`/point/reason?type=${type}`);
    return data;
  }

  public async createPointReason(param: CreatePointReasonParam): Promise<void> {
    await dodamTeacherAxios.post("/point/reason", param);
  }

  public async deletePointReason(id: number): Promise<void> {
    await dodamTeacherAxios.post(`/point/reason/${id}`, id);
  }

  public async givePoint(param: GivePointParam): Promise<void> {
    await dodamTeacherAxios.post("/point", param);
  }
}

export default new PointRepositoryImpl();
