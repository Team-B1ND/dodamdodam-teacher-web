import { SigninResponse } from "types/Signin/signin.type";
import { Response } from "types/util/response.type";

export interface AuthRepository {
  signIn(param: SignInParam): Promise<SigninResponse>;
  refreshAccessToken(refreshToken: string): Promise<NewAccessTokenResponse>;
  findPassword(password: string): Promise<void>;
}

export interface PasswordParm {
  type: string;

  visible: boolean;
}

export interface SignInParam {
  id: string;
  pw: string;
}

export interface FindPasswordParam {
  id: string;
  pw: string;
  newPw: string;
}

export interface NewAccessTokenResponse extends Response {
  data: string;
}
