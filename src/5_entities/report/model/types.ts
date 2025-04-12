import { SurveyStatus } from "@/6_shared";

export type SurveySummaryViewType = {
  title: string;
  description: string;
  status: SurveyStatus;
  startDttm: string;
  endDttm: string;
  participants: number;
  limitParticipants: number;
  totalQuestionCount: number;
};
