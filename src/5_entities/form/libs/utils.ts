import { Question } from "@/6_shared";
import { DefaultQuestion } from "../model/Question";

// 질문 추가
export const getNextQuestion = (
  viewOrder: number,
  title?: string
): Question => {
  return {
    ...DefaultQuestion,
    viewOrder,
    title: title ? title : DefaultQuestion.title,
  };
};

// 자동 제목 반환
export const getAutoQuestionTitle = (order?: number) => {
  return order ? `${order}번 문항` : "질문";
};
