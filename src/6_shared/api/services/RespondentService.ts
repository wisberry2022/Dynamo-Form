import {
  RespondentResponse,
  RespondentValidRequest,
  ResponseWrapper,
} from "@/6_shared/types";
import { Paths } from "../core/Paths";
import { RestService } from "../core/RestService";

export const Respondent = {
  get: async (
    respondentId: number
  ): Promise<ResponseWrapper<RespondentResponse>> => {
    return await RestService.get<RespondentResponse>(
      Paths.respondent.get(respondentId)
    );
  },
  valid: async (
    surveyId: number,
    sendData: RespondentValidRequest
  ): Promise<ResponseWrapper<string>> => {
    return await RestService.post<RespondentValidRequest>(
      Paths.respondent.valid(surveyId),
      sendData
    );
  },
};
