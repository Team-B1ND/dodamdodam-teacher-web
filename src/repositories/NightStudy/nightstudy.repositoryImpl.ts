import { dodamTestAxios, dodamV6Axios } from "../../libs/Axios/customAxios";
import { NightStudyResponse } from "types/NightStudy/nightstudy.type";
import { NightStudyRepository } from "./nightstudy.repository";

class NightStudyRepositoryImpl implements NightStudyRepository {
  public async getPendingNightStudy(): Promise<NightStudyResponse> {
    const { data } = await dodamTestAxios.get("/night-study/pending");
    return data;
  }

  public async getNighStudytList(): Promise<NightStudyResponse> {
    const { data } = await dodamV6Axios.get("/nightstudy");
    return data;
  }

  public async patchNightStudyAllow(id: number): Promise<void> {
    await dodamV6Axios.patch("/nightstudy/allow", { id });
  }
  public async patchNightStudyCancel(id: number): Promise<void> {
    await dodamV6Axios.patch("/nightstudy/deny", { id });
  }
}

export default new NightStudyRepositoryImpl();
