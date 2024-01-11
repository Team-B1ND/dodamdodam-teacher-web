import { AxiosError, AxiosRequestConfig } from "axios";
import Token from "../Token/Token";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/Token/Token.constant";
import tokenRepositoryImpl from "../../repositories/Token/token.repositoryImpl";
import { dodamTeacherAxios } from "./customAxios";

//리프래쉬 작업중인지 아닌지 구분하는 함수
let isRefreshing = false;

let refreshSubscribers: ((accessToken: string) => void)[] = [];

const onTokenRefreshed = (accessToken: string) => {
  refreshSubscribers.forEach((callback) => callback(accessToken));
};

const addRefreshSubscriber = (callback: (accessToken: string) => void) => {
  refreshSubscribers.push(callback);
};

const errorResponseHandler = async (error: AxiosError) => {
  if (error.response) {
    const {
      config: originalRequest,
      response: { status },
    } = error;

    //현재 사용 중인 access 토근과 refresh 토큰 확인
    const usingAccessToken = Token.getToken(ACCESS_TOKEN_KEY);
    const usingRefreshToken = Token.getToken(REFRESH_TOKEN_KEY);

    if (
      usingAccessToken !== undefined &&
      usingRefreshToken !== undefined &&
      status === 401
    ) {
      //요청 중 하나라도 리프래쉬 작업중이 아니라면
      if (!isRefreshing) {
        //리프래쉬 작업 시작
        isRefreshing = true;

        try {
          //리프래쉬 토큰을 사용하여 새로운 엑세스 토큰 가져오기
          const { data: newAccessToken } =
            await tokenRepositoryImpl.getRefreshToken({
              token: usingRefreshToken,
            });

          dodamTeacherAxios.defaults.headers.common[
            REQUEST_TOKEN_KEY
          ] = `Bearer ${newAccessToken}`;

          //새로운 access 토큰으로 현재 토큰 갱신
          Token.setToken(ACCESS_TOKEN_KEY, newAccessToken);

          //토큰 갱신 완료 리프래쉬 작업 끝내기
          isRefreshing = false;

          //새로 받은 access토큰을 기반으로 이때까지 밀려있던 요청 모두 처리
          onTokenRefreshed(newAccessToken);
        } catch (error) {
          //리프래쉬 하다가 오류? === 만료
          alert("세션이 만료되었습니다.");
          Token.clearToken();
          window.location.href = "/";
        }
      }

      //어떤 요청이 리프레쉬 작업중이라면 여기로 와서 그 후에 요청된 다른 API Promise를 refreshSubscribers에 넣어줌
      return new Promise((resolve) => {
        addRefreshSubscriber((accessToken: string) => {
          if (originalRequest)
            originalRequest.headers![
              REQUEST_TOKEN_KEY
            ] = `Bearer ${accessToken}`;
          resolve(dodamTeacherAxios(originalRequest as AxiosRequestConfig));
        });
      });
    }
  }

  //401 상태가 아닌 경우 에러를 reject하여 상위에서 처리하도록 함
  return Promise.reject(error);
};

export default errorResponseHandler;
