import { Member } from "types/Member/member.type";

export interface SigninResponse extends Response {
  member: Member;
  refreshToken: string;
  accessToken: string;
}
