import { ReplyFormRequest } from "./Reply";
import { RespondentRequest } from "./Respondent";

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
  surveyLink: string;
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

export type SurveyTokenResponse = {
  surveyToken: string;
};

export type SurveyValidResponse = {
  id: number;
  status: SurveyStatus;
  title: string;
  startDate: string;
  endDate: string;
  completedDate: string;
  suspendedDate: string;
};

export type SurveyValidRequest = {
  surveyId: number;
  name: string;
  email: string;
  phoneNumber: string;
};

export type SurveyResponseRequest = {
  respondent: RespondentRequest;
  replyForm: ReplyFormRequest;
};

export type SimpleSurvey = {
  id: number;
  title: string;
  description: string;
};
