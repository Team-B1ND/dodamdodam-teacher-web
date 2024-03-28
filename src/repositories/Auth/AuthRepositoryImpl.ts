import axios from "axios";
import { SigninResponse } from "types/Signin/signin.type";
import {
  AuthRepository,
  NewAccessTokenResponse,
  SignInParam,
} from "./AuthRepository";

class AuthRepositoryImpl implements AuthRepository {
  public async signIn(param: SignInParam): Promise<SigninResponse> {
    const { data } = await axios.post(
      `${process.env.REACT_APP_DODAM_TEST_SERVER_V6}/auth/login`,
      param
    );
 
     return data;
  }

  public async refreshAccessToken(
    refreshToken: string
  ): Promise<NewAccessTokenResponse> {
    const { data } = await axios.post<NewAccessTokenResponse>(
      `${process.env.REACT_APP_DODAM_TEST_SERVER_V6}/auth/reissue`,
      {
        refreshToken,
      }
    );
    return data;
  }
}

export default new AuthRepositoryImpl();
