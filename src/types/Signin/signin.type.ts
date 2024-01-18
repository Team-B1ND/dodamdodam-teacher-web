import { MemberType } from "../Member/member.type";

export interface SigninResponse extends Response {
  data: {
    member: MemberType;
    refreshToken: string;
    token: string;
  };
}