import { MemberType } from "types/Member/Member.type";

export interface SigninResponse extends Response {
  data: {
    member: MemberType;
    refreshToken: string;
    token: string;
  };
}
