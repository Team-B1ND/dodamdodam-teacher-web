import { dodamAxios } from "libs/Axios/customAxios";
import { OutResponse } from "types/Out/out.type";
import { OutGoingRepository } from "./outgoing.repository";

class OffBasePassRepositoryImpl implements OutGoingRepository {
  public async getOutGoing(date: string): Promise<OutResponse> {
    const { data } = await dodamAxios.get(`/out-going?date=${date}`);
    return data;
  }

  public async patchApproval(id: number): Promise<void> {
    await dodamAxios.patch(`/out-going/${id}/allow`);
  }

  public async patchApprovalCancel(id: number): Promise<void> {
    await dodamAxios.patch(`/out-going/${id}/revert`);
  }

  public async patchCancel(id: number): Promise<void> {
    await dodamAxios.patch(`/out-going/${id}/reject`);
  }
}

const offbasepassRepositoryImpl = new OffBasePassRepositoryImpl();
export default offbasepassRepositoryImpl;
