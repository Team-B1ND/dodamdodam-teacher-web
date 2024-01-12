import { LoginResponse } from "../../../types/Login/login.type";

export interface LoginRepository {
  postLogin(param: LoginParam): Promise<LoginResponse>;
}

export interface PasswordParm {
  type: string;
  visible: boolean;
}

export interface LoginParam {
  id: string;
  pw: string;
}
