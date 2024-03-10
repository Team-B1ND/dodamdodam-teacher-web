import { dodamTestAxios, dodamV6Axios } from "../../libs/Axios/customAxios";
import { OffBaseResponse } from "../../types/OffBasePass/offbasepass.type";
import { OffBasePassRepository } from "./offbasepass.repository";

class OffBasePassRepositoryImpl implements OffBasePassRepository {
  public async getOffBasePass(date: string): Promise<OffBaseResponse> {
    const { data } = await dodamTestAxios.get(`/out-going?date=${date}`);
    return data;
  }

  public async patchApproval(outId: number[]): Promise<void> {
    await dodamV6Axios.patch("/out/outgoing/allow", { outId });
  }

  public async patchApprovalCancel(outId: number[]): Promise<void> {
    await dodamV6Axios.patch("out/outgoing/cancel-allow", { outId });
  }

  public async patchCancel(outId: number[]): Promise<void> {
    await dodamV6Axios.patch("out/outgoing/deny", { outId });
  }
}

export default new OffBasePassRepositoryImpl();
