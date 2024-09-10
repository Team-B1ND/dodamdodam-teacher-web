import axios, { AxiosRequestConfig } from "axios";
import { ACCESS_TOKEN_KEY, REQUEST_TOKEN_KEY } from "constants/Token/Token.constant";
import Token from "../Token/Token";
import { errorResponseHandler } from "./errorResponseHandler";
import { requestHandler } from "./requestHandler";
import CONFIG from "../../config/config.json";

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

export const dodamAxios = createAxiosInstance({
  baseURL: CONFIG.SERVER,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${Token.getToken(ACCESS_TOKEN_KEY)}`!,
  },
});

export const dodamAxiosSetAccessToken = (token: string) => {
  dodamAxios.defaults.headers.common[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
};

dodamAxios.interceptors.request.use(requestHandler);
dodamAxios.interceptors.response.use((res) => res, errorResponseHandler);
