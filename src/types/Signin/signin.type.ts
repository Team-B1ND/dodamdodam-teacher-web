import { MemberType } from "types/Member/member.type";

export interface SigninResponse extends Response {
  member: MemberType;
  refreshToken: string;
  accessToken: string;
}
