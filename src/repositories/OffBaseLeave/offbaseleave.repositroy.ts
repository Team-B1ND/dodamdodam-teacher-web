import { dodamV6Axios } from "../../libs/Axios/customAxios";
import { OffBaseLeaveRepository } from "./offbaseleave.repositoryImpl";

class OffBaseLeaveRepositoryImpl implements OffBaseLeaveRepository {
  public async patchLeaveApproval(outId: number[]): Promise<void> {
    await dodamV6Axios.patch("/out/outsleeping/allow", { outId });
  }

  public async patchLeaveCancel(outId: number[]): Promise<void> {
    await dodamV6Axios.patch("out/outsleeping/deny", { outId });
  }

  public async patchLeaveApprovalCancel(outId: number[]): Promise<void> {
    await dodamV6Axios.patch("out/outsleeping/cancel-allow", { outId });
  }

  public async getTodayLeave(): Promise<void> {
    const { data } = await dodamV6Axios.get("/out/today");
    return data;
  }
}

export default new OffBaseLeaveRepositoryImpl();
