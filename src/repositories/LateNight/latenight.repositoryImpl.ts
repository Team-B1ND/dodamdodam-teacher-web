import { dodamV6Axios } from "../../libs/Axios/customAxios";
import { LateNightResponse } from "../../types/LateNight/latenight.type";
import { LateNightRepository } from "./latenight.repository";

class LateNightRepositoryImpl implements LateNightRepository {
  public async getPendingLateNight(): Promise<LateNightResponse> {
    const { data } = await dodamV6Axios.get("/nightstudy/pending");
    return data;
  }
}

export default new LateNightRepositoryImpl();
