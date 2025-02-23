import {
  ResponseWrapper,
  SurveyRequest,
  SurveyTokenResponse,
  SurveyUpdateRequest,
} from "@/6_shared/types";
import { RestService } from "../core/RestService";
import { Paths } from "../core/Paths";

export const Survey = {
  save: async (sendData: SurveyRequest): Promise<ResponseWrapper<string>> => {
    return await RestService.post<SurveyRequest, string>(
      Paths.survey.save,
      sendData
    );
  },
  update: async (
    sendData: SurveyUpdateRequest
  ): Promise<ResponseWrapper<string>> => {
    return await RestService.put<SurveyUpdateRequest, string>(
      Paths.survey.update,
      sendData
    );
  },
  createToken: async (): Promise<ResponseWrapper<SurveyTokenResponse>> => {
    return await RestService.get<SurveyTokenResponse>(Paths.survey.createToken);
  },
  complete: async (id: number): Promise<ResponseWrapper<string>> => {
    return await RestService.patch(Paths.survey.complete(id));
  },
  suspend: async (id: number): Promise<ResponseWrapper<string>> => {
    return await RestService.patch(Paths.survey.suspend(id));
  },
  delete: async (id: number): Promise<void> => {
    return await RestService.delete<void>(Paths.survey.delete(id));
  },
};
