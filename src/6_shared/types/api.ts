// 0000 - 응답 성공
// 1000 - 응답 실패
export type ResponseCode = "0000" | "1000";

// COMMON - 서비스 오류
// LOGICAL - 로직 오류
export type ErrorResponseType = "COMMON" | "LOGICAL";

// 서버 오류 타입
export type ErrorResponseWrapper<DATA> = {
  response: string;
  errorType: ErrorResponseType;
  message: string;
  data: DATA;
}

// EXPECTED - 서버에서 정의된 Exception
// UNEXPECTED - 서버에서 정의되지 않은 Exception
type FrontErrorType = "EXPECTED" | "UNEXPECTED";

// 프론트엔드에서 관리하는 에러 객체
export type FrontErrorObject = {
  type: FrontErrorType;
  response: ErrorResponseWrapper<unknown>
}

export type ResponseWrapper<DATA> = {
  response: string;
  data: DATA;
};
