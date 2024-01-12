import axios from "axios";
import { LoginResponse } from "../../../types/Login/login.type";
import { LoginParam, LoginRepository } from "./login.repository";

class LoginRepositoryImpl implements LoginRepository {
  public async postLogin(param: LoginParam): Promise<LoginResponse> {
    const { data } = await axios.post(
      `${process.env.REACT_APP_DODAM_TEACHER_API}/auth/login`,
      param
    );

    return data;
  }
}

export default new LoginRepositoryImpl();
