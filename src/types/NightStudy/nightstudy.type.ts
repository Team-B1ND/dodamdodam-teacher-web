export interface NightStudyResponse extends Response {
  data: NightStudyType[];
}

export interface NightStudyBanResponse extends Response {
  data: StudentBanType[];
}

export interface ProjectNightStudyResponse extends Response {
  data: ProjectStudyType[];
}

export interface ProjectStudentsResponse extends Response {
  data: ProjectStudentType[];
}

export interface ProjectUseingLabResponse extends Response {
  data: ProjectUseingLabType[];
}
export interface NightStudyType {
  id: number;
  content: string;
  status: string;
  doNeedPhone: boolean;
  reasonForPhone: string;
  student: StudentType;
  place: string;
  startAt: string;
  endAt: string;
  createdAt: string;
  modifiedAt: string;
  type: "NIGHT_STUDY_1" | "NIGHT_STUDY_2" | "NIGHT_STUDY_3";
}

export interface StudentType {
  id: number;
  name: string;
  grade: number;
  room: number;
  number: number;
}

export interface ProjectStudentType {
  id: number;
  name: string;
  grade: number;
  room: number;
  number: number;
  projectName: string;
  projectRoom: string;
}

export interface ProjectNightStudyMembers {
  id: number;
  name: string;
  grade: number;
  room: number;
  number: number;
  profileImage: string;
  role: "LEADER" | "MEMBER";
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
  members: ProjectNightStudyMembers[]; 
}

export interface ProjectUseingLabType {
  room: "LAB_12" | "LAB_13" | "LAB_14" | "LAB_15" | "LAB_16";
  type: "NIGHT_STUDY_PROJECT_1" | "NIGHT_STUDY_PROJECT_2";
  project: string;
  startAt: string;
  endAt: string;
}


export interface ProjectNightStudyMembers {
  id: number;
  name: string;
  grade: number;
  room: number;
  number: number;
  profileImage: string;
  role: "LEADER" | "MEMBER";
}

export interface StudentBanType {
  id: number;
  name: string;
  grade: number;
  room: number;
  number: number;
  phone: string;
  isBanned: boolean;
}

export interface NightStudyBanStatusType {
  isOpened: boolean;
  student: number;
}
