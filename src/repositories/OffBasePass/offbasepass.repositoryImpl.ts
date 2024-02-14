import { dodamV6Axios } from "../../libs/Axios/customAxios";
import { OffBaseResponse } from "../../types/OffBasePass/offbasepass.type";
import { OffBasePassRepository } from "./offbasepass.repository";

class OffBasePassRepositoryImpl implements OffBasePassRepository {
  public async getOffBasePass({
    date,
  }: {
    date: string;
  }): Promise<OffBaseResponse> {
    const { data } = await dodamV6Axios.get(`out/date?date=${date}`);
    return data;
  }

  public async patchApprovals(outId: number[]): Promise<void> {
    const { data } = await dodamV6Axios.patch("/out/outgoing/allow", { outId });
    return data;
  }
}

export default new OffBasePassRepositoryImpl();
