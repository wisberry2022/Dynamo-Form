import { SurveyRequest } from "@/6_shared/types";
import { RestService } from "../core/RestService";
import { Paths } from "../core/Paths";

export const Survey = {
  save: async (sendData: SurveyRequest): Promise<void> => {
    return await RestService.post<SurveyRequest, void>(
      Paths.survey.save,
      sendData
    );
  },
  delete: async (id: number): Promise<void> => {
    return await RestService.delete<void>(Paths.survey.delete(id));
  },
};
