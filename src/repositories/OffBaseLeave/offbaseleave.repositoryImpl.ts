import { OffBaseResponse } from "types/OffBasePass/offbasepass.type";

export interface OffBaseLeaveRepository {
  getOffBaseLeave(date: string): Promise<OffBaseResponse>;
  patchLeaveApproval(outId: number[]): Promise<void>;
  patchLeaveCancel(outId: number[]): Promise<void>;
  patchLeaveApprovalCancel(outId: number[]): Promise<void>;
  getTodayLeave(): Promise<void>;
}
