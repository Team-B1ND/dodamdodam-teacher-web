import { OffBaseResponse } from "types/OffBasePass/offbasepass.type";
import { dodamTestAxios, dodamV6Axios } from "../../libs/Axios/customAxios";
import { OffBaseLeaveRepository } from "./offbaseleave.repositoryImpl";

class OffBaseLeaveRepositoryImpl implements OffBaseLeaveRepository {
  public async getOffBaseLeave(date: string): Promise<OffBaseResponse> {
    const { data } = await dodamTestAxios.get(`/out-sleeping?date=${date}`);
    return data;
  }
  public async patchLeaveApproval(id: number): Promise<void> {
    await dodamTestAxios.patch(`/out-sleeping/${id}/allow`);
  }

  public async patchLeaveCancel(id: number): Promise<void> {
    await dodamTestAxios.patch(`/out-sleeping/${id}/reject`);
  }

  public async patchLeaveApprovalCancel(id: number): Promise<void> {
    await dodamTestAxios.patch(`/out-sleeping/${id}/revert`);
  }

  public async getTodayLeave(): Promise<OffBaseResponse> {
    const { data } = await dodamTestAxios.get("/out-sleeping/valid");
    return data;
  }
}

export default new OffBaseLeaveRepositoryImpl();
