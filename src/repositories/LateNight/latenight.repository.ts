import { LateNightResponse } from "../../types/LateNight/latenight.type";

export interface LateNightRepository {
  getPendingLateNight(): Promise<LateNightResponse>;
  patchLateNightAllow(id: number): Promise<void>;
  patchLateNightCancel(id: number): Promise<void>;
}
