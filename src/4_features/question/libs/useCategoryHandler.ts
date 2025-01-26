import {
  Question,
  QuestionCategory,
  QuestionSubCategory,
  SelectQuestion,
} from "@/6_shared";
import { useReducer, useState } from "react";
import { CategoryReducerActionType } from "../model/types";
import {
  DirectConvertInitQuestionStates,
  InitQuestionStates,
} from "../model/InitQuestionStates";
import { convertQuestionStateByCategory } from "./utils";
import {
  CategoryHandlerType,
  ReducerDropDownQuestion,
  ReducerMultipleQuestion,
} from "@/5_entities/question";

const DirectConvertQuestionTypes = ["DESCRIPTIVE", "EVIDENCE"];

// 타입 변경 시 로직 수정 필요
const categoryReducer = <T extends Question>(
  state: T,
  action: CategoryReducerActionType
): T => {
  switch (action.type) {
    // STEP1 항목 유형 설정 함수
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
    // STEP2 세부 유형 설정 함수
    case "CHANGE_SUB_CATEGORY":
      const tobeSubCategory = action.category;
      const tobeQuestion = InitQuestionStates[tobeSubCategory];
      return {
        ...(tobeQuestion as T),
        id: state.id,
        title: state.title,
        question: state.question,
        viewOrder: state.viewOrder,
        required: state.required,
      };
    case "CHANGE_MULTI_QUESTION":
      return {
        ...state,
        questions: action.question.questions,
        multiple: action.question.multiple,
        responseLimit: action.question.responseLimit,
      } as T;
    case "CHANGE_DROPDOWN_QUESTION":
      return {
        ...state,
        questions: action.question.questions,
      };
    default:
      return state;
  }
};

export const useCategoryHandler = <T extends Question>(question: T): CategoryHandlerType => {
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

  const onChangeMultipleQuestion = (question: ReducerMultipleQuestion) => {
    dispatch({
      type: "CHANGE_MULTI_QUESTION",
      question,
    });
  };

  const onChangeDropDownQuestion = (question: ReducerDropDownQuestion) => {
    dispatch({
      type: "CHANGE_DROPDOWN_QUESTION",
      question,
    });
  };

  return {
    state,
    onChangeCategory,
    onChangeSubCategory,
    questionHandler: {
      onChangeMultipleQuestion,
      onChangeDropDownQuestion,
    }
  };
};
