import { Question } from "@/6_shared";
import { DefaultQuestion } from "../model/Question";

export const getNextQuestion = (viewOrder: number): Question => {
  return {
    ...DefaultQuestion,
    viewOrder,
  };
};
