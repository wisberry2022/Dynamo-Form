import { ReducerMultipleQuestion } from "@/5_entities/question";
import { SelectQuestion } from "@/6_shared";

export const toReducerMultipleQuestion = (question: SelectQuestion): ReducerMultipleQuestion => {
  return {
    questions: question.questions,
    multiple: question.multiple,
    responseLimit: question.responseLimit
  }
}