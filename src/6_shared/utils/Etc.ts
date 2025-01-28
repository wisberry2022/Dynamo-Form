import { ObjType } from "../types";

/**
 * 객체 내 필드 검색 메소드
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
