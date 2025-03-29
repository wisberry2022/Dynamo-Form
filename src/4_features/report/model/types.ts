import { QuestionSubCategory, SelectResponse, SimpleFile } from "@/6_shared";

export type StatView = {
  question: string;
  subCategory: QuestionSubCategory;
};

export type SelectResponseView = SelectResponse;

export type SimpelFileView = SimpleFile;

export type SelectStatView = StatView & {
  answers: SelectResponseView[];
};

export type TextualStatView = StatView & {
  answers: string[];
  averageAnswers: number;
};

export type RatingStatView = StatView & {
  min: number;
  max: number;
  average: number;
};

export type AttachStatView = StatView & {
  files: SimpelFileView[];
};
