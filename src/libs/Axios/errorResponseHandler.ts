import { AxiosError } from 'axios';
import Token from '../Token/Token';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, REQUEST_TOKEN_KEY } from 'constants/Token/Token.constant';
import { dodamAxios } from './customAxios';
import AuthRepositoryImpl from 'repositories/Auth/AuthRepositoryImpl';

export const errorResponseHandler = async (error: AxiosError) => {
  if (error.response) {
    const {
      response: { status },
    } = error;

    const usingAccessToken = Token.getToken(ACCESS_TOKEN_KEY);
    const usingRefreshToken = Token.getToken(REFRESH_TOKEN_KEY);

    if (usingAccessToken !== undefined && usingRefreshToken !== undefined && status === 401) {
      try {
        const { data: newAccessToken } = await AuthRepositoryImpl.refreshAccessToken(usingRefreshToken);

        Token.setToken(ACCESS_TOKEN_KEY, newAccessToken);

        dodamAxios.defaults.headers.common[REQUEST_TOKEN_KEY] = `Bearer ${newAccessToken}`;
      } catch (error) {
        console.log(error);
      }
    }
  }
  return Promise.reject(error);
};
