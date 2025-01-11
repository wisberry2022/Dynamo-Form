import { Question, QuestionSubCategory } from "@/6_shared";

export const convertQuestionStateByCategory = <T extends Question>(
  convert: T,
  before: Question
): T => {
  return {
    ...convert,
    id: before.id,
    title: before.title,
    question: before.question,
    viewOrder: before.viewOrder,
    required: before.required,
  };
};

export const convertQuestionStatesBySubCategory = (
  tobe: QuestionSubCategory
) => {};
