import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

axiosInstance.interceptors.response.use((value) => {
  if (value.status === 200) {
    // 정의된 Exception 처리
    if (value.data?.response === "1000") {
      throw {
        type: "EXPECTED",
        response: value.data,
      };
    }
  } else {
    // 정의되지 않은 Exception 처리
    throw {
      type: "UNEXPECTED",
      response: value.data,
    };
  }

  return value;
});
