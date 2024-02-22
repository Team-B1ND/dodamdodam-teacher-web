import { MemberListType } from "types/Member/Member.type";

export interface MemberRepository {
  getAllMemberList(): Promise<MemberListType>;
}
