import {
  ReducerAttachQuestion,
  ReducerMultipleQuestion,
  ReducerRatingQuestion,
  ReducerSliderQuestion,
} from "@/5_entities/question";
import {
  AttachQuestion,
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

export const toReducerAttachQuestion = (
  question: AttachQuestion
): ReducerAttachQuestion => {
  return {
    attachableImage: question.attachableImage,
    attachableVideo: question.attachableVideo,
    attachableAudio: question.attachableAudio,
    attachableOthers: question.attachableOthers,
    maxFileSize: question.maxFileSize,
    unit: question.unit,
    extensions: question.extensions,
  };
};
