import { OutResponse } from "types/Out/out.type";

export interface OutSleepingRepository {
  getOutSleeping(endAt: string): Promise<OutResponse>;
  patchSleepingApproval(id: number): Promise<void>;
  patchSleepingCancel(id: number): Promise<void>;
  patchSleepingApprovalCancel(id: number): Promise<void>;
  getTodayOutSleeping(): Promise<OutResponse>;
}
