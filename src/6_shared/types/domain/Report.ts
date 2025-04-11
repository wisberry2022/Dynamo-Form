import { QuestionCategory, QuestionSubCategory } from "./Form";
import { SurveyStatus } from "./Survey";

export type SurveySummaryResponse = {
  id: number;
  title: string;
  description: string;
  status: SurveyStatus;
  startDttm: string;
  endDttm: string;
  participants: number;
  limitParticipants: number;
  totalQuestionCount: number;
};

export type SelectResponse = {
  question: string;
  count: number;
};

export type SimpleFile = {
  id: number;
  fileKey: string;
  fileName: string;
};

export type Stat = {
  questionId: number;
  question: string;
  category: QuestionCategory;
  subCategory: QuestionSubCategory;
};

export type SelectStat = Stat & {
  answers: SelectResponse[];
};

export type TextualStat = Stat & {
  answers: string[];
  averageAnswers: number;
};

export type RatingStat = Stat & {
  min: number;
  max: number;
  average: number;
};

export type AttachStat = Stat & {
  files: SimpleFile[];
};

export type SurveyRespondentResponse = {
  id: number;
  name: string;
  formId: number;
  replyFormId: number;
};
