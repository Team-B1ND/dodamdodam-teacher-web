import { MemberListType } from "types/Member/member.type";

export interface MemberRepository {
  getAllMemberList(): Promise<MemberListType>;
}
