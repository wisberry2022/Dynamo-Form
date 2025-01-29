import { SurveyDetailResponse, SurveyUpdateRequest } from "@/6_shared";

export const toUpdateRequest = (response: SurveyDetailResponse): SurveyUpdateRequest => {
  const {regDttm, status, ...req} = response;
  return req;
}