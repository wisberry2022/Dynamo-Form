import { Unique } from "../types";

/**
 * 원시형 타입 배열의 데이터로부터 다음 순번을 반환하는 함수
 * @params data: T[] - 원시형 타입 배열
 * @return number - 다음 순번
 */
export const getNextSequenceInPrimitive = <T>(data: T[]): number => {
  return data.length ? data.length + 1 : 1;
};

/**
 * 객체 배열의 데이터로부터 다음 순번을 반환하는 함수
 * @type T - Unique type을 상속받는 객체 타입(Unique type은 id를 가지고 있는 객체)
 * @param data T[] - id를 가지고 있는 객체 배열
 * @param key string - 순번을 계산할 기준 필드(optional)
 * @description key가 주어지지 않으면 id를 기준으로 순번을 계산
 * @returns number - 다음 순번
 */
export const getNextSequenceObject = <T extends Unique>(
  data: T[],
  key?: string
): number => {
  const nextSeq = data.length
    ? Math.max(...data.map((dat) => (key ? dat[key] : dat.id))) + 1
    : 1;

  return nextSeq;
};
