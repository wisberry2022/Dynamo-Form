import { endpoints } from "@/6_shared/constants";
import { Toast } from "@/6_shared/ui";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

axiosInstance.interceptors.request.use(
  (config) => {
    // 쿠키
    config.withCredentials = true;

    return config;
  },
  (error) => {
    console.log(error);
    throw {
      type: "REQUEST_ERROR",
      message: "요청 중 에러가 발생하였습니다.",
    };
  }
);

axiosInstance.interceptors.response.use(
  (value) => {
    if (value.status === 200) {
      // 정의된 Exception 처리
      if (value.data?.response === "1000") {
        throw {
          type: "EXPECTED",
          response: value.data,
        };
      }
    }

    return value;
  },
  (error) => {
    if (error.status === 401) {
      window.location.replace(endpoints.auth.signIn);
      Toast.error("로그아웃 되었습니다.");
      return;
    }
    throw {
      type: "UNEXPECTED",
      response: error.response.data,
    };
  }
);
