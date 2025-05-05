import { dodamAxios } from "libs/Axios/customAxios";
import { NightStudyResponse, ProjectNightStudyResponse } from "types/NightStudy/nightstudy.type";
import { NightStudyRepository } from "./nightstudy.repository";

class NightStudyRepositoryImpl implements NightStudyRepository {
  public async getPendingNightStudy(): Promise<NightStudyResponse> {
    const { data } = await dodamAxios.get("/night-study/pending");
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
  public async deleteNightStudyAllow(id: number):Promise<void>{
    await dodamAxios.patch(`/night-study/${id}/revert`);
  }
  public async getPendingNightStudyPending(): Promise<ProjectNightStudyResponse> {
    const {data} = await dodamAxios.get("/night-study/project/pending");
    return data;
  }
}

const nightStudyRepositoryImpl = new NightStudyRepositoryImpl();
export default nightStudyRepositoryImpl;
