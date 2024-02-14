import { OffBaseResponse } from "../../types/OffBasePass/offbasepass.type";

export interface OffBasePassRepository {
  getOffBasePass({ date }: { date: string }): Promise<OffBaseResponse>;
  patchApprovals(id: number[]): Promise<void>;
}

export interface OffBaseParam {
  date: string;
}
