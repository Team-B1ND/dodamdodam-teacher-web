import { dodamV6Axios, dodamTestAxios } from "../../libs/Axios/customAxios";
import { OffBaseResponse } from "../../types/OffBasePass/offbasepass.type";
import { OffBaseParam, OffBasePassRepository } from "./offbasepass.repository";

class OffBasePassRepositoryImpl implements OffBasePassRepository {
  public async getOffBasePass(date: string): Promise<OffBaseResponse> {
    const { data } = await dodamTestAxios.get(`/out-going?date=${date}`);
    return data;
  }

  public async patchApproval(id: number): Promise<void> {
    await dodamTestAxios.patch(`/out-going/${id}/allow`);
  }

  public async patchApprovalCancel(id: number): Promise<void> {
    await dodamTestAxios.patch(`/out-going/${id}/revert`);
  }

  public async patchCancel(id: number): Promise<void> {
    await dodamTestAxios.patch(`/out-going/${id}/reject`);
  }
}

export default new OffBasePassRepositoryImpl();
