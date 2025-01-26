import {
  ReducerDropDownQuestion,
  ReducerMultipleQuestion,
  ReducerRatingQuestion,
  ReducerSliderQuestion,
  ReducerTextualQuestion,
} from "@/5_entities/question";
import {
  DataHandlerType,
  Question,
  QuestionCategory,
  QuestionSubCategory,
} from "@/6_shared";
import { JSX } from "react";

export type QuestionComponentMapperType = (view: any) => JSX.Element;
export type CategoryComponentMapperType = (
  handler: DataHandlerType<any>,
  onQuestionSave: (question: Question) => void
) => JSX.Element;

type ChangeCategoryType = {
  type: "CHANGE_CATEGORY";
  category: QuestionCategory;
};

type ChangeSubCategoryType = {
  type: "CHANGE_SUB_CATEGORY";
  category: QuestionSubCategory;
};

type ChangeMultiQuestionType = {
  type: "CHANGE_MULTI_QUESTION";
  question: ReducerMultipleQuestion;
};

type ChangeDropdownQuestionType = {
  type: "CHANGE_DROPDOWN_QUESTION";
  question: ReducerDropDownQuestion;
};

type ChangeTextualQuestionType = {
  type: "CHANGE_TEXTUAL_QUESTION";
  question: ReducerTextualQuestion;
};

type ChangeRatingQuestionType = {
  type: "CHANGE_RATING_QUESTION";
  question: ReducerRatingQuestion;
};

type ChangeSliderQuestionType = {
  type: "CHANGE_SLIDER_QUESTION";
  question: ReducerSliderQuestion;
};

export type CategoryReducerActionType =
  | ChangeCategoryType
  | ChangeSubCategoryType
  | ChangeMultiQuestionType
  | ChangeDropdownQuestionType
  | ChangeTextualQuestionType
  | ChangeRatingQuestionType
  | ChangeSliderQuestionType;
