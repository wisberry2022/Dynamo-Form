import {
  AttachQuestion,
  DropDownQuestion,
  Question,
  QuestionCategory,
  QuestionSubCategory,
  RatingQuestion,
  SelectQuestion,
  SliderQuestion,
  TextualQuestion,
} from "@/6_shared";

export type QuestionHandlerType = {
  onChangeMultipleQuestion: (question: ReducerMultipleQuestion) => void;
  onChangeDropDownQuestion: (question: ReducerDropDownQuestion) => void;
  onChangeTextualQuestion: (question: ReducerTextualQuestion) => void;
  onChangeRatingQuestion: (question: ReducerRatingQuestion) => void;
  onChangeSliderQuestion: (question: ReducerSliderQuestion) => void;
  onChangeAttachQuestion: (question: ReducerAttachQuestion) => void;
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

export type ReducerTextualQuestion = Pick<TextualQuestion, "answerLimit">;

export type ReducerRatingQuestion = Pick<
  RatingQuestion,
  "ratingLimit" | "score"
>;

export type ReducerSliderQuestion = Pick<
  SliderQuestion,
  "min" | "max" | "score"
>;

export type ReducerAttachQuestion = { [key: string]: any } & Pick<
  AttachQuestion,
  | "attachableImage"
  | "attachableVideo"
  | "attachableAudio"
  | "attachableOthers"
  | "maxFileSize"
  | "unit"
  | "extensions"
>;
