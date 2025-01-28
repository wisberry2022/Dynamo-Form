export type SurveyStatus = "WAITING" | "PROGRESS" | "COMPLETE" | "SUSPENDED";

export type SurveyListResponse = {
  id: number;
  title: string;
  status: SurveyStatus;
};

export type SurveyRequest = {
  formId: number | null;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  limitParticipant: number;
};
