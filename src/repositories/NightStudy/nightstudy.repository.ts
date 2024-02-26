import { NightStudyResponse } from "types/NightStudy/nightstudy.type";

export interface NightStudyRepository {
  getPendingNightStudy(): Promise<NightStudyResponse>;
  getNighStudytList(): Promise<NightStudyResponse>;
  patchNightStudyAllow(id: number): Promise<void>;
  patchNightStudyCancel(id: number): Promise<void>;
}
