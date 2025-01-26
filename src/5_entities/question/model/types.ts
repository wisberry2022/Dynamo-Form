import {
  DropDownQuestion,
  Question,
  QuestionCategory,
  QuestionSubCategory,
  SelectQuestion,
} from "@/6_shared";

export type QuestionHandlerType = {
  onChangeMultipleQuestion: (question: ReducerMultipleQuestion) => void;
  onChangeDropDownQuestion: (question: ReducerDropDownQuestion) => void;
};

export type CategoryHandlerType = {
  state: Question;
  onChangeCategory: (category: QuestionCategory) => void;
  onChangeSubCategory: (category: QuestionSubCategory) => void;
  questionHandler: QuestionHandlerType;
};

export type ReducerMultipleQuestion = Pick<
  SelectQuestion,
  "questions" | "multiple" | "responseLimit"
>;
export type ReducerDropDownQuestion = Pick<DropDownQuestion, "questions">;
