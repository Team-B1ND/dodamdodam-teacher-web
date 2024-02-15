import { dodamV6Axios } from "../../libs/Axios/customAxios";
import { OffBaseResponse } from "../../types/OffBasePass/offbasepass.type";
import { OffBasePassRepository } from "./offbasepass.repository";

class OffBasePassRepositoryImpl implements OffBasePassRepository {
  public async getOffBasePass(date: string): Promise<OffBaseResponse> {
    const { data } = await dodamV6Axios.get(`out/date?date=${date}`);
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

  public async patchArrived(id: number): Promise<void> {
    await dodamV6Axios.patch(`/outoutgoing/arrived/${id}`);
  }
}

export default new OffBasePassRepositoryImpl();
