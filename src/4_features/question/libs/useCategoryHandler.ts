import { Question, QuestionCategory, QuestionSubCategory } from "@/6_shared";
import { useReducer, useState } from "react";
import { CategoryReducerActionType } from "../model/types";
import {
  DirectConvertInitQuestionStates,
  InitQuestionStates,
} from "../model/InitQuestionStates";
import { convertQuestionStateByCategory } from "./utils";

const DirectConvertQuestionTypes = ["DESCRIPTIVE", "EVIDENCE"];

// 타입 변경 시 로직 수정 필요
const categoryReducer = <T extends Question>(
  state: T,
  action: CategoryReducerActionType
): T => {
  switch (action.type) {
    case "CHANGE_CATEGORY":
      const tobe = action.category;
      const convert = DirectConvertInitQuestionStates[tobe];
      return {
        ...(convert as T),
        id: state.id,
        title: state.title,
        question: state.question,
        viewOrder: state.viewOrder,
        required: state.required,
      };
    case "CHANGE_SUB_CATEGORY":
      const tobeSubCategory = action.category;
      const tobeQuestion = InitQuestionStates[tobeSubCategory];
      return {
        ...tobeQuestion,
        ...state,
      };
    default:
      return state;
  }
};

export const useCategoryHandler = <T extends Question>(question: T) => {
  const [state, dispatch] = useReducer(categoryReducer, question);

  const onChangeCategory = (category: QuestionCategory) => {
    dispatch({
      type: "CHANGE_CATEGORY",
      category,
    });
  };

  const onChangeSubCategory = (category: QuestionSubCategory) => {
    dispatch({
      type: "CHANGE_SUB_CATEGORY",
      category,
    });
  };

  return {
    state,
    onChangeCategory,
    onChangeSubCategory,
  };
};
