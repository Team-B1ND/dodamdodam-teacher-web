import { dodamAxios } from "libs/Axios/customAxios";
import {
  NightStudyResponse,
  ProjectNightStudyResponse,
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
  public async patchNightStudyProjectAllow(id:number): Promise<void> {
    await dodamAxios.patch(`/night-study/project/${id}/allow`);
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
