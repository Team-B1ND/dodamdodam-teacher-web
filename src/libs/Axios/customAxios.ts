import axios, { AxiosRequestConfig } from "axios";
import config from "../../config/config.json";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/Token/Token.constant";
import Token from "../Token/Token";

const createAxiosInstance = (config?: AxiosRequestConfig) => {
  const baseConfig: AxiosRequestConfig = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };
  return axios.create({
    ...baseConfig,
    ...config,
  });
};

export const dodamV6Axios = createAxiosInstance({
  baseURL: config.DODAM_SERVER_V6,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${Token.getToken(ACCESS_TOKEN_KEY)}`!,
  },
});
