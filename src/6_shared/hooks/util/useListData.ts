import { SequenceData, UseListDataOptionType } from "@/6_shared/types";
import { useState } from "react";

const _toSequenceData = <T>(defaultData: T[]) => {
  return defaultData.map((value, seq) => ({
    seq: seq + 1,
    value,
  }));
};

export const useListData = <T = any>(
  viewData: T[],
  option?: UseListDataOptionType<T>
) => {
  const [list, setList] = useState<SequenceData<T>[]>(
    _toSequenceData<T>(viewData)
  );

  // 행 관련 함수
  const addRow = () => {
    const nextSeq = list.length
      ? Math.max(...list.map((itm) => itm.seq)) + 1
      : 1;
    setList((prev) => [
      ...prev,
      { seq: nextSeq, value: option ? option.defaultData : null },
    ]);
  };

  const removeRow = (seq: number) => {
    setList((prev) => prev.filter((itm) => itm.seq !== seq));
  };

  const removeBulkRow = (seqs: number[]) => {
    setList((prev) => prev.filter((itm) => !seqs.includes(itm.seq)));
  };

  // 데이터 변경 함수
  const onChangeValue = (seq: number, value: T) => {
    setList((prev) =>
      prev.map((itm) => {
        if (itm.seq === seq) {
          return {
            ...itm,
            value,
          };
        }
        return itm;
      })
    );
  };

  // 변환 함수
  const convertOrigin = (): T[] => {
    return list.map((itm) => itm.value as T);
  };

  return {
    list,
    addRow,
    removeRow,
    removeBulkRow,
    onChangeValue,
    convertOrigin,
  };
};
