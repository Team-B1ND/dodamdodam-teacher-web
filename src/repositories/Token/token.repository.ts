import { RefreshResponse } from "../../types/Token/token.type";

export interface TokenRepository {
  getRefreshToken(token: RefreshTokenParam): Promise<RefreshResponse>;
}

export interface RefreshTokenParam {
  token: string;
}
