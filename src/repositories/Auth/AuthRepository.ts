import { Response } from "types/util/response.type";

export interface AuthRepository {}

export interface SignInParam {
  id: string;
  pw: string;
}
export interface NewAccessTokenResponse extends Response {
  data: string;
}
