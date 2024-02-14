export interface OffBaseResponse extends Response {
  data: OffBasePassType;
}

export interface OffBasePassType {
  outgoingList: OutListType[];
  outsleepingList: OutListType[];
}

export interface OutListType {
  id: number;
  reason: string;
  status: string;
  student: StudentType;
  teacher: TeacherType;
  startOutDate: string;
  endOutDate: string;
  arrivedDate: string;
  checkedDate: string;
}

export interface StudentType {
  classroom: ClassRoomType;
  id: number;
  member: MemberType;
  number: number;
  phone: string;
}

export interface ClassRoomType {
  grade: number;
  id: number;
  place: {
    id: number;
    name: string;
    type: {
      id: number;
      name: string;
    };
  };
  room: number;
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
