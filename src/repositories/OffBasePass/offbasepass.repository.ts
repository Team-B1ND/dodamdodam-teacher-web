import { OffBaseResponse } from "../../types/OffBasePass/offbasepass.type";

export interface OffBasePassRepository {
  getOffBasePass({ date }: { date: string }): Promise<OffBaseResponse>;
  patchApproval(outId: number[]): Promise<void>;
  patchApprovalCancel(outId: number[]): Promise<void>;
}

export interface OffBaseParam {
  date: string;
}
