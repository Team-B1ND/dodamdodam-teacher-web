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
} from "./PointRepository";
import {
  dodamTeacherAxios,
  dodamTestAxios,
  dodamV6Axios,
} from "libs/Axios/customAxios";

class PointRepositoryImpl implements PointRepository {
  public async getPointAllMember(type: string): Promise<PointResponse> {
    const { data } = await dodamTestAxios.get(`/point/score/all/${type}`);
    return data;
  }

  public async getPointReason(type: PointType): Promise<PointReasonResponse> {
    const { data } = await dodamTestAxios.get(`/point/reason/${type}`);
    return data;
  }

  public async createPointReason(param: CreatePointReasonParam): Promise<void> {
    await dodamV6Axios.post("/point/reason", param);
  }

  public async deletePointReason(id: number): Promise<void> {
    await dodamTestAxios.post(`/point/${id}`, id);
  }

  public async givePoint(param: GivePointParam): Promise<void> {
    await dodamTeacherAxios.post("/point", param);
  }

  public async getPointByStudentId({
    studentId,
    type,
  }: GetPointByStudentIdParam): Promise<PointScoreForStudentResonse> {
    const { data } = await dodamTestAxios.get(
      `/point/student?studentId=${studentId}/${type}`
    );
    return data;
  }
}

export default new PointRepositoryImpl();
