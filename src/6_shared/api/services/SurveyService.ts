import {
  ResponseWrapper,
  SurveyRequest,
  SurveyTokenResponse,
  SurveyUpdateRequest,
} from "@/6_shared/types";
import { RestService } from "../core/RestService";
import { Paths } from "../core/Paths";

export const Survey = {
  save: async (sendData: SurveyRequest): Promise<void> => {
    return await RestService.post<SurveyRequest, void>(
      Paths.survey.save,
      sendData
    );
  },
  update: async (sendData: SurveyUpdateRequest): Promise<void> => {
    return await RestService.put<SurveyUpdateRequest, void>(
      Paths.survey.update,
      sendData
    );
  },
  createToken: async (): Promise<ResponseWrapper<SurveyTokenResponse>> => {
    return await RestService.get<ResponseWrapper<SurveyTokenResponse>>(
      Paths.survey.createToken
    );
  },
  complete: async (id: number): Promise<void> => {
    return await RestService.patch(Paths.survey.complete(id));
  },
  suspend: async (id: number): Promise<void> => {
    return await RestService.patch(Paths.survey.suspend(id));
  },
  delete: async (id: number): Promise<void> => {
    return await RestService.delete<void>(Paths.survey.delete(id));
  },
};
