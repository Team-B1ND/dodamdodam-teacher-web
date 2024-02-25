import { dodamV6Axios } from "../../libs/Axios/customAxios";
import { LateNightResponse } from "../../types/LateNight/latenight.type";
import { LateNightRepository } from "./latenight.repository";

class LateNightRepositoryImpl implements LateNightRepository {
  public async getPendingLateNight(): Promise<LateNightResponse> {
    const { data } = await dodamV6Axios.get("/nightstudy/pending");
    return data;
  }

  public async getLateNightList(): Promise<LateNightResponse> {
    const { data } = await dodamV6Axios.get("/nightstudy");
    return data;
  }

  public async patchLateNightAllow(id: number): Promise<void> {
    await dodamV6Axios.patch("/nightstudy/allow", { id });
  }
  public async patchLateNightCancel(id: number): Promise<void> {
    await dodamV6Axios.patch("/nightstudy/deny", { id });
  }
}

export default new LateNightRepositoryImpl();
