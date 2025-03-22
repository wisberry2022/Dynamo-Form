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
}