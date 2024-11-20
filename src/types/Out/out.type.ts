export interface OutResponse extends Response {
  data: OutListType[];
}

export interface OutListType {
  id: number;
  reason: string;
  status: string;
  phone: string;
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
