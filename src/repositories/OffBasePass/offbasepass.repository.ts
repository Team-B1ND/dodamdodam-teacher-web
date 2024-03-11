import { OffBaseResponse } from "../../types/OffBasePass/offbasepass.type";

export interface OffBasePassRepository {
  getOffBasePass(date: string): Promise<OffBaseResponse>;
  patchApproval(id: number): Promise<void>;
  patchApprovalCancel(id: number): Promise<void>;
  patchCancel(id: number): Promise<void>;
}

export interface OffBaseParam {
  date: string;
}
