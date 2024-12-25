import { FormListResponse, ResponseWrapper } from "@/6_shared/types";
import { Paths } from "../core/Paths";
import { RestService } from "../core/RestService";

export const Form = {
  getAll: async (): Promise<ResponseWrapper<FormListResponse[]>> => {
    return await RestService.get<ResponseWrapper<FormListResponse[]>>(
      Paths.form.getAll
    );
  },
};
