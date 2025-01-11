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

export type CategoryReducerActionType =
  | ChangeCategoryType
  | ChangeSubCategoryType;
