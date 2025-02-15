import { FormResponse, QuestionCategory, QuestionSubCategory } from "./Form";
import { SimpleSurvey } from "./Survey";

export type ReplyViewResponse = {
  survey: SimpleSurvey;
  form: FormResponse;
};

export type ReplyFormRequest = {
  id: number;
  replies: Reply[];
};

export interface Reply {
  id: number | null;
  category: QuestionCategory;
  subCategory: QuestionSubCategory;
}

export interface SelectReply extends Reply {
  answers: string[];
}

export interface DropdownReply extends Reply {
  answer: string;
}

export interface TextualReply extends Reply {
  text: string;
}

export interface RatingReply extends Reply {
  score: number;
}

export interface SliderReply extends Reply {
  score: number;
}

export interface AttachReply extends Reply {}
