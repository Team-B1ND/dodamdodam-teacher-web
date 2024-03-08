import { MemberType } from "types/Member/member.type";

export interface SigninResponse extends Response {
  data: {
    member: MemberType;
    refreshToken: string;
    accessToken: string;
  };
}
