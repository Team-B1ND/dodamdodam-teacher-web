import axios, { AxiosRequestConfig } from "axios";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/Token/Token.constant";
import Token from "../Token/Token";
import { errorResponseHandler } from "./errorResponseHandler";
import { requestHandler } from "./requestHandler";

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
  baseURL: process.env.REACT_APP_DODAM_SERVER_V6,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${Token.getToken(ACCESS_TOKEN_KEY)}`!,
  },
});

export const dodamTestAxios = createAxiosInstance({
  baseURL: process.env.REACT_APP_DODAM_TEST_SERVER_V6,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${Token.getToken(ACCESS_TOKEN_KEY)}`,
  },
});

export const dodamTeacherAxios = createAxiosInstance({
  baseURL: process.env.REACT_APP_DODAM_TEACHER_API,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${Token.getToken(ACCESS_TOKEN_KEY)}`!,
  },
});

// export const dodamV6AxiosSetAccessToken = (token: string) => {
//   dodamV6Axios.defaults.headers.common[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
// };

// dodamV6Axios.interceptors.request.use(requestHandler);
// dodamV6Axios.interceptors.response.use((res) => res, errorResponseHandler);

export const dodamV6AxiosSetAccessToken = (token: string) => {
  dodamTestAxios.defaults.headers.common[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
};

dodamTestAxios.interceptors.request.use(requestHandler);
dodamTestAxios.interceptors.response.use((res) => res, errorResponseHandler);
