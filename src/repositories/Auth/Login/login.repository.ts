import { LoginResponse } from "../../../types/Login/login.type";

export interface LoginRepostiroy {
  postLogin(param: LoginParam): Promise<LoginResponse>;
}

export interface LoginParam {
  id: string;
  pw: string;
}
