import { RespondentValidRequest, ResponseWrapper } from "@/6_shared/types";
import { Paths } from "../core/Paths";
import { RestService } from "../core/RestService";

export const Respondent = {
  valid: async (
    surveyId: number,
    sendData: RespondentValidRequest
  ): Promise<ResponseWrapper<string>> => {
    return await RestService.post<
      RespondentValidRequest,
      ResponseWrapper<string>
    >(Paths.respondent.valid(surveyId), sendData);
  },
};
