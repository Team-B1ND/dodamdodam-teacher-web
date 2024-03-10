export interface OffBaseResponse extends Response {
  data: OutListType[];
}

// export interface OffBasePassType {
//   outgoingList: OutListType[];
// }

export interface OutListType {
  id: number;
  reason: string;
  status: string;
  student: StudentType;
  startAt: string;
  endAt: string;
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

export interface ClassRoomType {
  grade: number;
  id: number;
  place: PlaceType;
  room: number;
}

export interface PlaceType {
  id: number;
  name: string;
  type: {
    id: number;
    name: string;
  };
}

export interface MemberType {
  email: string;
  id: string;
  joinDate: string;
  name: string;
  profileImage: string;
  role: string;
  status: string;
}

export interface TeacherType {
  phone: string;
  id: string;
  name: string;
  email: string;
  accessLevel: number;
  allowed: number;
  joinDate: string;
  profileImage: string;
}

export interface DateType {
  date: string;
}
