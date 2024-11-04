import { OffBaseResponse } from "types/OffBasePass/offbasepass.type";
import { dodamAxios } from "libs/Axios/customAxios";
import { OutSleepingRepository } from "./outsleeping.respository";

class OffBaseLeaveRepositoryImpl implements OutSleepingRepository {
  public async getOutSleeping(endAt: string): Promise<OffBaseResponse> {
    const { data } = await dodamAxios.get(`/out-sleeping?endAt=${endAt}`);
    return data;
  }
  public async patchSleepingApproval(id: number): Promise<void> {
    await dodamAxios.patch(`/out-sleeping/${id}/allow`);
  }

  public async patchSleepingCancel(id: number): Promise<void> {
    await dodamAxios.patch(`/out-sleeping/${id}/reject`);
  }

  public async patchSleepingApprovalCancel(id: number): Promise<void> {
    await dodamAxios.patch(`/out-sleeping/${id}/revert`);
  }

  public async getTodayOutSleeping(): Promise<OffBaseResponse> {
    const { data } = await dodamAxios.get("/out-sleeping/valid");
    return data;
  }
}

const offbaseleaveRepositroy = new OffBaseLeaveRepositoryImpl();
export default offbaseleaveRepositroy;
