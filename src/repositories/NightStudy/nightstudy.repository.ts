import {
  NightStudyResponse,
  ProjectNightStudyResponse,
  ProjectStudyType,
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
  getNightStudyProjectDetail(id: number): Promise<ProjectStudyType>;
  getProjectUsingLab(): Promise<ProjectUseingLabResponse>;
  patchNightStudyProjectAllow(id: number, room : string): Promise<void>;
  patchNightStudyProjectReject(id: number, rejectReason: string): Promise<void>;
  getNightStudyAllowedProjects(): Promise<ProjectNightStudyResponse>;
  patchNightStudyProjectRevert(id: number): Promise<void>;
  deleteNightStudyBan(id: number): Promise<void>;
}

export interface NightStudyBanParams {
  student: number;
  reason: string;
  ended: string;
}
