export interface OffBaseResponse extends Response {
  data: OutListType[];
}

export interface OutListType {
  id: number;
  reason: string;
  status: string;
  student: StudentType;
  startAt: string;
  endAt: string;
  dinnerOrNot: boolean;
  createdAt: string;
  modifiedAt: string;
}

export interface StudentType {
  id: number;
  name: string;
  grade: number;
  room: number;
  number: number;
}
