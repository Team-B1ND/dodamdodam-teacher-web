import { OffBaseResponse } from "types/OffBasePass/offbasepass.type";

export interface OutSleepingRepository {
  getOutSleeping(endAt: string): Promise<OffBaseResponse>;
  patchSleepingApproval(id: number): Promise<void>;
  patchSleepingCancel(id: number): Promise<void>;
  patchSleepingApprovalCancel(id: number): Promise<void>;
  getTodayOutSleeping(): Promise<OffBaseResponse>;
}
