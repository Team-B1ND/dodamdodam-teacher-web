import { MemberResponse } from "types/Member/member.type";

export interface MemberRepository {
  getAllMemberList(): Promise<MemberResponse>;
  postMemberJoinTeacher(param: MemberSignUpParam): Promise<void>;
}

export interface MemberSignUpParam {
  id: string;
  email: string;
  name: string;
  phone: string;
  pw: string;
  position: string;
  tel: string;
}
