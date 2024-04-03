import { Response } from "types/util/response.type";

export interface Member {
  id: string;
  name: string;
  email: string;
  readonly role: "STUDENT" | "TEACHER" | "ADMIN";
  readonly status: "ACTIVE" | "DEACTIVATED";
  profileImage: null | string;
  phone: string;
  readonly createdAt: string;
  readonly modifiedAt: string;
}

export interface Student {
  id: number;
  name: string;
  grade: number;
  room: number;
  number: number;
}

export interface Teacher {
  id: number;
  tel: string;
  position: string;
}

export interface StudentAndTeacher extends Member {
  student: Student | null;
  teacher: Teacher | null;
}

export interface MemberResponse extends Response {
  data: StudentAndTeacher[];
}

export interface MyMemberResponse extends Response {
  data: StudentAndTeacher;
}
