import axios from "axios";
import { RefreshResponse } from "../../types/Token/token.type";
import { RefreshTokenParam, TokenRepository } from "./TokenRepository";

class TokenRepositoryImpl implements TokenRepository {
  public async getRefreshToken(
    token: RefreshTokenParam
  ): Promise<RefreshResponse> {
    const { data } = await axios.post<RefreshResponse>(
      `${process.env.REACT_APP_DODAM_SERVER_V6}/token/refresh`,
      token
    );

    return data;
  }
}

export default new TokenRepositoryImpl();
