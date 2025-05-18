import { dodamAxios } from "libs/Axios/customAxios";
import {
  NightStudyResponse,
  ProjectNightStudyResponse,
  ProjectStudentsResponse,
  ProjectStudyDetailResponseType,
  ProjectUseingLabResponse,
} from "types/NightStudy/nightstudy.type";
import { NightStudyRepository } from "./nightstudy.repository";
import { NightStudyBanResponse } from "types/NightStudy/nightstudy.type";
import { NightStudyBanParams } from "./nightstudy.repository";

class NightStudyRepositoryImpl implements NightStudyRepository {
  public async getPendingNightStudy(): Promise<NightStudyResponse> {
    const { data } = await dodamAxios.get("/night-study/pending");
    return data;
  }

  public async getNightStudyBanMember(): Promise<NightStudyBanResponse> {
    const { data } = await dodamAxios.get("/night-study/ban/students");
    return data;
  }

  public async getNighStudytList(): Promise<NightStudyResponse> {
    const { data } = await dodamAxios.get("/night-study");
    return data;
  }

  public async patchNightStudyAllow(id: number): Promise<void> {
    await dodamAxios.patch(`/night-study/${id}/allow`);
  }
  public async patchNightStudyCancel(id: number): Promise<void> {
    await dodamAxios.patch(`/night-study/${id}/reject`);
  }
  public async deleteNightStudyAllow(id: number): Promise<void> {
    await dodamAxios.patch(`/night-study/${id}/revert`);
  }
  public async getPendingNightStudyPending(): Promise<ProjectNightStudyResponse> {
    const { data } = await dodamAxios.get("/night-study/project/pending");
    return data;
  }
  public async getProjectUsingLab(): Promise<ProjectUseingLabResponse> {
    const { data } = await dodamAxios.get("night-study/project/rooms");
    return data;
  }
  public async patchNightStudyProjectAllow(
    id: number,
    room: string
  ): Promise<void> {
    await dodamAxios.patch(`/night-study/project/${id}/allow/${room}`);
  }

  public async patchNightStudyProjectReject(id: number, rejectReason: string): Promise<void> {
    await dodamAxios.patch(`/night-study/project/${id}/reject`, {rejectReason});
  }
  public async getNightStudyAllowedProjects(): Promise<ProjectNightStudyResponse> {
    const { data } = await dodamAxios.get("/night-study/project/allowed");
    return data;
  }

  public async getNightStudyProjectStudents(): Promise<ProjectStudentsResponse> {
    const { data } = await dodamAxios.get("/night-study/project/students");
    return data;
  }
  public async getNightStudyProjectDetail(
    id: number
  ): Promise<ProjectStudyDetailResponseType> {
    const { data } = await dodamAxios.get(`/night-study/project/${id}`);
    return data.data;
  }
  public async patchNightStudyProjectRevert(id: number): Promise<void> {
    await dodamAxios.patch(`/night-study/project/${id}/revert`);
  }
  public async deleteNightStudyBan(id: number): Promise<void> {
    await dodamAxios.delete("/night-study/ban", { params: { student: id } });
  }

  public async createNightStudyBan(param: NightStudyBanParams): Promise<void> {
    await dodamAxios.post("/night-study/ban", param);
  }
}

const nightStudyRepositoryImpl = new NightStudyRepositoryImpl();
export default nightStudyRepositoryImpl;
