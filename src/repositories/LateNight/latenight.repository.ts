import { LateNightResponse } from "../../types/LateNight/latenight.type";

export interface LateNightRepository {
  getPendingLateNight(): Promise<LateNightResponse>;
}
