import { InternalAxiosRequestConfig } from "axios";
import Token from "../Token/Token";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/Token/Token.constant";

export const requestHandler = async (config: InternalAxiosRequestConfig) => {
  if (
    Token.getToken(ACCESS_TOKEN_KEY) !== undefined &&
    Token.getToken(REFRESH_TOKEN_KEY) !== undefined
  ) {
    config.headers[REQUEST_TOKEN_KEY] = `Bearer ${Token.getToken(
      ACCESS_TOKEN_KEY
    )}`;
  } else {
  }

  return config;
};
