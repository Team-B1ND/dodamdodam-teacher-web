import { OutResponse } from "types/Out/out.type";

export interface OutGoingRepository {
  getOutGoing(date: string): Promise<OutResponse>;
  patchApproval(id: number): Promise<void>;
  patchApprovalCancel(id: number): Promise<void>;
  patchCancel(id: number): Promise<void>;
}

export interface OffBaseParam {
  date: string;
}
