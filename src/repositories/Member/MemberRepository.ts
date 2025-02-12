import { MemberResponse, MyMemberResponse } from "types/Member/member.type";

export interface MemberRepository {
  getAllMemberList(): Promise<MemberResponse>;
  postMemberJoinTeacher(param: MemberSignUpParam): Promise<void>;
  getMyMember(): Promise<MyMemberResponse>;
}

export interface MemberSignUpParam {
  id: string;
  email: string;
  name: string;
  phone: string;
  pw: string;
  checkPw: string;
  position: string;
  tel: string;
}
