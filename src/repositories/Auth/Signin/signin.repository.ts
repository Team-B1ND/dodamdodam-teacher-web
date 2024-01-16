import { SigninResponse } from "../../../types/Signin/signin.type";

export interface SigninRepository {
  postSignin(param: SigninParam): Promise<SigninResponse>;
}

export interface PasswordParm {
  type: string;
  visible: boolean;
}

export interface SigninParam {
  id: string;
  pw: string;
}
