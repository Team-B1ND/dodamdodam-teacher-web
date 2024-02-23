export interface LateNightResponse extends Response {
  data: LateNightType[];
}

export interface LateNightType {
  id: number;
  content: string;
  allowCheck: string;
  isPhone: boolean;
  reason: string;
  student: StudnetType;
  place: string;
  startAt: string;
  endAt: string;
  createdAt: string;
}

export interface StudnetType {
  name: string;
  grade: number;
  room: number;
  number: number;
}
