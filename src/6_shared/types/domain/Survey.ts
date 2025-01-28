export type SurveyStatus = "WAITING" | "PROGRESS" | "COMPLETE" | "SUSPENDED"

export type SurveyListResponse = {
  id: number;
  title: string;
  status: SurveyStatus;
}

