export interface NightStudyResponse extends Response {
  data: NightStudyType[];
}

export interface NightStudyType {
  id: number;
  content: string;
  status: string;
  doNeedPhone: boolean;
  reasonForPhone: string;
  student: StudnetType;
  place: string;
  startAt: string;
  endAt: string;
  createdAt: string;
  modifiedAt: string;
}

export interface StudnetType {
  id: number;
  name: string;
  grade: number;
  room: number;
  number: number;
}

export interface ProjectStudyType {
  id: number;
  type: "NIGHT_STUDY_PROJECT_1" | "NIGHT_STUDY_PROJECT_2";
  status: string; 
  room: string;
  name: string;
  description: string;
  startAt: string;
  endAt: string;
  leader: StudnetType;
}

export interface ProjectNightStudyResponse extends Response {
  data: ProjectStudyType[];
}
