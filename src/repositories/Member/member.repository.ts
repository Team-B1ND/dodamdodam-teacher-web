import { MemberListType } from "@src/types/Member/member.type";

export interface MemberRepository {
  getAllMemberList(): Promise<MemberListType>;
}
