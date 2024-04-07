import { dodamAxios } from "../../libs/Axios/customAxios";
import { NightStudyResponse } from "types/NightStudy/nightstudy.type";
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
}

export default new NightStudyRepositoryImpl();
