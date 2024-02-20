export interface OffBaseLeaveRepository {
  patchLeaveApproval(outId: number[]): Promise<void>;
  patchLeaveCancel(outId: number[]): Promise<void>;
  patchLeaveApprovalCancel(outId: number[]): Promise<void>;
}
