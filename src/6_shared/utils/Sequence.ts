/**
 * 원시형 타입 배열의 데이터로부터 다음 순번을 반환하는 함수
 * @params data: T[] - 원시형 타입 배열
 * @return number - 다음 순번
 */
export const getNextSequenceInPrimitive = <T>(data: T[]):number => {
  return data.length ? data.length + 1 : 1
}