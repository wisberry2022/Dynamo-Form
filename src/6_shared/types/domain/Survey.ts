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

export type SurveyDetailResponse = SurveyRequest & {
  id: number;
  status: SurveyStatus;
  regDttm: string;
  completedDttm: string | null;
  suspendedDttm: string | null;
};

export type SurveyUpdateRequest = SurveyRequest & {
  id: number;
};
