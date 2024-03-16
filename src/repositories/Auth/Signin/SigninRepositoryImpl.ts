import axios from "axios";
import { SigninResponse } from "../../../types/Signin/signin.type";
import { SigninParam, SigninRepository } from "./SigninRepository";

class SigninRepositoryImpl implements SigninRepository {
  public async postSignin(param: SigninParam): Promise<SigninResponse> {
    const { data } = await axios.post(
      `${process.env.REACT_APP_DODAM_TEST}/auth/login`,
      param
    );

    return data;
  }
}

export default new SigninRepositoryImpl();
