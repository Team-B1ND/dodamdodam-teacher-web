import axios from "axios";
import { SigninResponse } from "types/Signin/signin.type";
import {
  AuthRepository,
  NewAccessTokenResponse,
  SignInParam,
} from "./AuthRepository";
import CONFIG from "../../config/config.json";

class AuthRepositoryImpl implements AuthRepository {
  public async signIn(param: SignInParam): Promise<SigninResponse> {
    const { data } = await axios.post(
      `${CONFIG.SERVER}/auth/login`,
      param
    );

    return data;
  }

  public async refreshAccessToken(
    refreshToken: string
  ): Promise<NewAccessTokenResponse> {
    const { data } = await axios.post<NewAccessTokenResponse>(
      `${CONFIG.SERVER}/auth/reissue`,
      {
        refreshToken,
      }
    );
    return data;
  }
}

const authRepositoryImpl = new AuthRepositoryImpl();
export default authRepositoryImpl;
