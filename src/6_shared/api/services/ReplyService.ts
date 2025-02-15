import { ResponseWrapper, SurveyResponseRequest } from "@/6_shared/types";
import { RestService } from "../core/RestService";
import { Paths } from "../core/Paths";

export const Reply = {
  submit: async (
    surveyId: number,
    sendData: SurveyResponseRequest
  ): Promise<ResponseWrapper<String>> => {
    return await RestService.post<
      SurveyResponseRequest,
      ResponseWrapper<String>
    >(Paths.reply.submit(surveyId), sendData);
  },
};
