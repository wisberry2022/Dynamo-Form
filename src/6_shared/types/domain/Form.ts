import { Audit } from "./Common";

export type QuestionCategory =
  | "SELECT"
  | "DESCRIPTIVE"
  | "EVALUATIVE"
  | "EVIDENCE";

export type QuestionSubCategory =
  | "MULTI_QUESTION"
  | "DROPDOWN"
  | "TEXTUAL"
  | "RATING"
  | "SLIDER"
  | "FILE_ATTACH";

export type FileExtensions =
  | "JPG"
  | "PNG"
  | "SVG"
  | "GIF"
  | "AVI"
  | "MP4"
  | "WMV"
  | "MP3"
  | "WAV"
  | "PDF"
  | "PPT"
  | "PPTX"
  | "XLS"
  | "XLSX";

export type FileSize = "KB" | "MB" | "GB";

export type FormListResponse = {
  id: number;
  title: string;
};

export type FormNameUpdateRequest = FormListResponse;
export type FormNameUpdateResponse = FormNameUpdateRequest;

export interface Question {
  id: number | null;
  title: string;
  question: string;
  category: QuestionCategory;
  subCategory: QuestionSubCategory;
  viewOrder: number;
  required: boolean;
}

export interface SelectQuestion extends Question {
  questions: string[];
  multiple: boolean;
  responseLimit: number;
}

export interface DropDownQuestion extends Question {
  questions: string[];
}

export interface TextualQuestion extends Question {
  answerLimit: number;
}

export interface RatingQuestion extends Question {
  ratingLimit: number;
  score: number;
}

export interface SliderQuestion extends Question {
  min: number;
  max: number;
  score: number;
}

export interface AttachQuestion extends Question {
  attachableImage: boolean;
  attachableVideo: boolean;
  attachableAudio: boolean;
  attachableOthers: boolean;
  maxFileSize: number;
  unit: FileSize;
  extensions: FileExtensions[];
}

export type FormResponse = {
  id: number | null;
  title: string;
  description: string;
  autoTitle: boolean;
  questions: Question[];
};

export type FormRequest = FormResponse;

export type FormPopupListResponse = Audit & {
  id: number;
  title: string;
};

export type SimpleFormDetailResponse = Pick<Audit, "regDttm"> & {
  id: number;
  title: string;
  description: string;
  questionCount: number;
};
