import { OffBaseResponse } from "types/OffBasePass/offbasepass.type";
import { dodamAxios } from "libs/Axios/customAxios";
import { OffBaseLeaveRepository } from "./offbaseleave.repositoryImpl";

class OffBaseLeaveRepositoryImpl implements OffBaseLeaveRepository {
  public async getOffBaseLeave(date: string): Promise<OffBaseResponse> {
    const { data } = await dodamAxios.get(`/out-sleeping?date=${date}`);
    return data;
  }
  public async patchLeaveApproval(id: number): Promise<void> {
    await dodamAxios.patch(`/out-sleeping/${id}/allow`);
  }

  public async patchLeaveCancel(id: number): Promise<void> {
    await dodamAxios.patch(`/out-sleeping/${id}/reject`);
  }

  public async patchLeaveApprovalCancel(id: number): Promise<void> {
    await dodamAxios.patch(`/out-sleeping/${id}/revert`);
  }

  public async getTodayLeave(): Promise<OffBaseResponse> {
    const { data } = await dodamAxios.get("/out-sleeping/valid");
    return data;
  }
}

const offbaseleaveRepositroy = new OffBaseLeaveRepositoryImpl();
export default offbaseleaveRepositroy;
