import { ObjType } from "../types";

/**
 * 객체 내 필드 검색 함수
 * @param data 검색 대상이 될 데이터
 * @param fields 객체에서 검색할 필드 대상 목록(string 배열)
 * @param keyword 검색어
 * @returns 검색어에 해당하는 필드가 존재하는지 여부
 */
export const isMatchField = <T extends ObjType<any>>(
  data: T,
  fields: string[],
  keyword: string
): boolean => {
  return fields.some((field) => data[field].includes(keyword));
};

/**
 * 빈 객체 여부 검사 함수
 * @param object 검사 대상 객체
 * @returns 객체가 비어있는지 여부
 */
export const isEmptyObject = <T extends object>(object: T): boolean => {
  if (!object) {
    return true;
  }
  return !Object.keys(object).length;
};

/**
 * 값 공백 여부 검사 함수
 * @param value 검사 대상 값
 * @returns boolean - 값 공백 여부
 */
export const isEmpty = <T = string | number | Date>(value: T): boolean => {
  // 값이 undefined인 경우
  if (!value) {
    return true;
  }

  // 값이 null인 경우
  if (value === null) {
    return true;
  }

  return false;
};

/**
 * 파일 용량 단위 변환 함수
 * @param value 파일 용량 값
 * @param unit 파일 용량 단위
 * @returns number - 변환된 파일 용량 값(kb 단위)
 */
export const convertFileSize2KB = (
  value: number,
  unit: "Byte" | "KB" | "MB" | "GB"
): number => {
  switch (unit) {
    case "Byte":
      return value / 1024;
    case "KB":
      return value;
    case "MB":
      return value * 1024;
    case "GB":
      return value * 1024 * 1024;
    default:
      return value;
  }
};

/**
 * 파일 확장자 검사 함수
 * @params fileName 파일명
 * @return string 파일 확장자
 */
export const extractFileExtension = (fileName: string): string => {
  if (isEmpty(fileName)) {
    return "";
  }

  const splited = fileName.split(".");

  if (isEmpty(splited)) {
    return "";
  }

  return splited.at(-1) as string;
};
