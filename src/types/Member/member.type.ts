import { Response } from "../util/response.type";

export interface MemberListType extends Response {
  data: {
    parents: ParentType[];
    students: StudentType[];
    teachers: TeacherType[];
  };
}

export interface ParentType {}

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
  id: number;
  member: MemberType;
  phone: string;
  position: string;
  tel: string;
}
