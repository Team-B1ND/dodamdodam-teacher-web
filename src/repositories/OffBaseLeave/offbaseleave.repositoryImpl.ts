import { OffBaseResponse } from "types/OffBasePass/offbasepass.type";

export interface OffBaseLeaveRepository {
  getOffBaseLeave(endAt: string): Promise<OffBaseResponse>;
  patchLeaveApproval(id: number): Promise<void>;
  patchLeaveCancel(id: number): Promise<void>;
  patchLeaveApprovalCancel(id: number): Promise<void>;
  getTodayLeave(): Promise<OffBaseResponse>;
}
