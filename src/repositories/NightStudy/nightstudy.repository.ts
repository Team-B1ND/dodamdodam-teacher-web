import {
  NightStudyResponse,
  ProjectNightStudyResponse,
  ProjectStudyDetailResponseType,
  ProjectStudentsResponse,
  ProjectUseingLabResponse
} from "types/NightStudy/nightstudy.type";

export interface NightStudyRepository {
  getPendingNightStudy(): Promise<NightStudyResponse>;
  getNighStudytList(): Promise<NightStudyResponse>;
  patchNightStudyAllow(id: number): Promise<void>;
  patchNightStudyCancel(id: number): Promise<void>;
  deleteNightStudyAllow(id: number): Promise<void>;
  getNightStudyProjectStudents(): Promise<ProjectStudentsResponse>;
  getPendingNightStudyPending(): Promise<ProjectNightStudyResponse>;
  getNightStudyProjectDetail(id: number): Promise<ProjectStudyDetailResponseType>;
  getProjectUsingLab(): Promise<ProjectUseingLabResponse>;
  patchNightStudyProjectAllow(id: number, room : string): Promise<void>;
  patchNightStudyProjectReject(id: number): Promise<void>;
  getNightStudyAllowedProjects(): Promise<ProjectNightStudyResponse>;
  patchNightStudyProjectRevert(id: number): Promise<void>;
  deleteNightStudyBan(id: number): Promise<void>;
}

export interface NightStudyBanParams {
  student: number;
  reason: string;
  ended: string;
}
