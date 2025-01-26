import {
  ReducerDropDownQuestion,
  ReducerMultipleQuestion,
  ReducerRatingQuestion,
  ReducerSliderQuestion,
} from "@/5_entities/question";
import {
  DropDownQuestion,
  RatingQuestion,
  SelectQuestion,
  SliderQuestion,
} from "@/6_shared";

export const toReducerMultipleQuestion = (
  question: SelectQuestion
): ReducerMultipleQuestion => {
  return {
    questions: question.questions,
    multiple: question.multiple,
    responseLimit: question.responseLimit,
  };
};

export const toReducerRatingQuestion = (
  question: RatingQuestion
): ReducerRatingQuestion => {
  return {
    ratingLimit: question.ratingLimit,
    score: question.score,
  };
};

export const toReducerSliderQuestion = (
  question: SliderQuestion
): ReducerSliderQuestion => {
  return {
    min: question.min,
    max: question.max,
    score: question.score,
  };
};
