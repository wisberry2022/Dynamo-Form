import { isEmpty } from "./EtcUtils";

const _toFormatString = (date: Date, format: string): string => {
  // 포맷 구성요소 매핑
  const formatMap: any = {
    yyyy: date.getFullYear(),
    MM: String(date.getMonth() + 1).padStart(2, "0"),
    dd: String(date.getDate()).padStart(2, "0"),
    HH: String(date.getHours()).padStart(2, "0"),
    mm: String(date.getMinutes()).padStart(2, "0"),
    ss: String(date.getSeconds()).padStart(2, "0"),
    SSS: String(date.getMilliseconds()).padStart(3, "0"),
  };

  // 포맷에 따라 변환된 값 반환
  return format.replace(
    /yyyy|MM|dd|HH|mm|ss|SSS/g,
    (match) => formatMap[match]
  );
};

/**
 * 날짜 포맷팅 함수
 * @param dateString 날짜 문자열
 * @param format 변환할 포맷 스트링(기본: yyyy-MM-dd)
 * @returns 포매팅된 날짜 문자열
 */
export const formatDate = (
  dateString: string,
  format: string = "yyyy-MM-dd"
): string => {
  if (isEmpty(dateString)) {
    return "";
  }
  // 입력 문자열을 Date 객체로 변환
  const date = new Date(dateString.trim());

  return _toFormatString(date, format);
};

/**
 * Date 객체 formatString 변환 함수
 * @param date 변환할 Date 객체
 * @param format 변환할 포맷스트링
 * @returns 포맷스트링으로 변환된 문자열
 */
export const parseDate = (date: Date, format = "yyyy-MM-dd"): string => {
  if (isEmpty(date)) {
    return "";
  }

  return _toFormatString(date, format);
};
