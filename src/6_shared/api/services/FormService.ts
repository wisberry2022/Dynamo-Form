import {
  FormListResponse,
  FormNameUpdateRequest,
  FormNameUpdateResponse,
  FormRequest,
  FormResponse,
  ResponseWrapper,
  SimpleFormDetailResponse,
} from "@/6_shared/types";
import { Paths } from "../core/Paths";
import { RestService } from "../core/RestService";

export const Form = {
  getSummary: async (
    formId: number
  ): Promise<ResponseWrapper<SimpleFormDetailResponse>> => {
    return await RestService.get<SimpleFormDetailResponse>(
      Paths.form.getSummary(formId)
    );
  },
  save: async (
    sendData: FormRequest
  ): Promise<ResponseWrapper<FormResponse>> => {
    return await RestService.post<FormRequest, FormResponse>(
      Paths.form.save,
      sendData
    );
  },
  updateName: async (
    sendData: FormNameUpdateRequest
  ): Promise<ResponseWrapper<FormNameUpdateResponse>> => {
    return await RestService.patch<
      FormNameUpdateRequest,
      FormNameUpdateResponse
    >(Paths.form.updateName, sendData);
  },
  update: async (
    sendData: FormRequest
  ): Promise<ResponseWrapper<FormResponse>> => {
    return await RestService.put<FormRequest, FormResponse>(
      Paths.form.update,
      sendData
    );
  },
  delete: async (id: number): Promise<void> => {
    await RestService.delete<void>(Paths.form.delete(id));
  },
};
