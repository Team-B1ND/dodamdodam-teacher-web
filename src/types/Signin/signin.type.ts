import { Member } from "types/Member/member.type";

export interface SigninResponse extends Response {
  data: {
    member: Member;
    refreshToken: string;
    accessToken: string;
  };
}
