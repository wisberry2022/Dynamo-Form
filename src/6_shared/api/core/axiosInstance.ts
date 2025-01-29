import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

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
    throw {
      type: "UNEXPECTED",
      response: error.response.data,
    };
  }
);
