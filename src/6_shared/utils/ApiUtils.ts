import { ErrorResponseWrapper } from "../types";
import { Toast } from "../ui";

/**
 * 에러 핸들링 함수
 * @param e 에러 객체
 */
export const handleError = (e: any) => {
  switch (e.type) {
    case "EXPECTED":
      let response = e.response as ErrorResponseWrapper<any>;
      if (response.errorType === "COMMON") {
        Toast.error(response.message);
      } else if (response.errorType === "LOGICAL") {
        Toast.error(`${response.message} - ${response.data}`);
      } else {
        Toast.error("예기치 못한 에러가 발생했습니다.");
      }
      break;
    case "UNEXPECTED":
      Toast.error("예기치 못한 에러가 발생했습니다.");
      break;
    default:
      Toast.error("예기치 못한 에러가 발생했습니다.");
  }
};
