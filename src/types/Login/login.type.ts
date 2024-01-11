import { MemberType } from "../Member/member.type";

export interface LoginResponse extends Response {
  data: {
    member: MemberType;
    refreshToken: string;
    token: string;
  };
}
