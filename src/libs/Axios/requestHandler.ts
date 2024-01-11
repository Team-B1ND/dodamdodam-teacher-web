import { AxiosRequestConfig } from "axios";
import Token from "../Token/Token";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/Token/Token.constant";

const requestHandler = (config: AxiosRequestConfig) => {
  if (
    Token.getToken(ACCESS_TOKEN_KEY) === undefined ||
    Token.getToken(REFRESH_TOKEN_KEY) === undefined
  ) {
    window.location.href = "/";
  } else {
    config.headers = {
      [REQUEST_TOKEN_KEY]: `Bearer ${Token.getToken(ACCESS_TOKEN_KEY)}`,
    };
  }

  return config;
};

export default requestHandler;
