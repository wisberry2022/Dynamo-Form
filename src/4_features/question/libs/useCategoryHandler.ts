import {
  Question,
  QuestionCategory,
  QuestionSubCategory,
  SelectQuestion,
} from "@/6_shared";
import { useReducer } from "react";
import { CategoryReducerActionType } from "../model/types";
import {
  DirectConvertInitQuestionStates,
  InitQuestionStates,
} from "../model/InitQuestionStates";
import {
  CategoryHandlerType,
  ReducerDropDownQuestion,
  ReducerMultipleQuestion,
  ReducerRatingQuestion,
  ReducerSliderQuestion,
  ReducerTextualQuestion,
} from "@/5_entities/question";

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
    // N지선다형 설정 변경 함수
    case "CHANGE_MULTI_QUESTION":
      return {
        ...state,
        questions: action.question.questions,
        multiple: action.question.multiple,
        responseLimit: action.question.responseLimit,
      } as T;
    // 드롭다운형 설정 변경 함수
    case "CHANGE_DROPDOWN_QUESTION":
      return {
        ...state,
        questions: action.question.questions,
      } as T;
    // 서술형 설정 변경 함수
    case "CHANGE_TEXTUAL_QUESTION":
      return {
        ...state,
        answerLimit: action.question.answerLimit,
      } as T;
    // 별점형 설정 변경 함수
    case "CHANGE_RATING_QUESTION":
      return {
        ...state,
        ratingLimit: action.question.ratingLimit,
        score: action.question.score,
      } as T;
    // 수치조절형 설정 변경 함수
    case "CHANGE_SLIDER_QUESTION":
      return {
        ...state,
        min: action.question.min,
        max: action.question.max,
        score: action.question.score,
      };
    default:
      return state;
  }
};

export const useCategoryHandler = <T extends Question>(
  question: T
): CategoryHandlerType => {
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

  const onChangeTextualQuestion = (question: ReducerTextualQuestion) => {
    dispatch({
      type: "CHANGE_TEXTUAL_QUESTION",
      question,
    });
  };

  const onChangeRatingQuestion = (question: ReducerRatingQuestion) => {
    dispatch({
      type: "CHANGE_RATING_QUESTION",
      question,
    });
  };
  
  const onChangeSliderQuestion = (question: ReducerSliderQuestion) => {
    dispatch({
      type: "CHANGE_SLIDER_QUESTION",
      question
    })
  }

  return {
    state,
    onChangeCategory,
    onChangeSubCategory,
    questionHandler: {
      onChangeMultipleQuestion,
      onChangeDropDownQuestion,
      onChangeTextualQuestion,
      onChangeRatingQuestion,
      onChangeSliderQuestion
    },
  };
};
