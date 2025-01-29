import { ErrorResponseWrapper } from "../types";
import { Toast } from "../ui";

/**
 * 에러 핸들링 함수
 * @param e 에러 객체
 */
export const handleError = (e: any) => {
  // 에러 객체가 없을 경우
  if (!e) {
    Toast.error("[FE001] 정의되지 않은 에러가 발생했습니다.");
    return;
  }

  // 인터셉터에서 throw한 에러가 아닐 경우
  if (!e["type"]) {
    Toast.error("[FE002] 정의되지 않은 에러가 발생했습니다.");
    return;
  }

  // 인터셉터에서 throw한 에러일 경우
  switch (e.type) {
    case "EXPECTED":
      let response = e.response as ErrorResponseWrapper<any>;
      if (response.errorType === "COMMON") {
        Toast.error(response.message);
      } else if (response.errorType === "LOGICAL") {
        Toast.error(`${response.message} - ${response.data}`);
      } else {
        Toast.error("[FE003] 정의되지 않은 에러가 발생했습니다.");
      }
      break;
    case "UNEXPECTED":
      Toast.error("예기치 못한 에러가 발생했습니다.");
      break;
    default:
      Toast.error("[FE004] 정의되지 않은 에러가 발생했습니다.");
  }
};
