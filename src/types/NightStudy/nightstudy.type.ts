export interface NightStudyResponse extends Response {
  data: NightStudyType[];
}

export interface NightStudyBanResponse extends Response {
  data: StudentBanType[];
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

export interface StudentBanType {
  id: number;
  name: string;
  grade: number;
  room: number;
  number: number;
  phone: string;
  isBanned: boolean;
}