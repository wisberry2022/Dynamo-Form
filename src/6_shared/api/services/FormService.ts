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
    return await RestService.get<ResponseWrapper<SimpleFormDetailResponse>>(
      Paths.form.getSummary(formId)
    );
  },
  save: async (
    sendData: FormRequest
  ): Promise<ResponseWrapper<FormResponse>> => {
    return await RestService.post<FormRequest, ResponseWrapper<FormResponse>>(
      Paths.form.save,
      sendData
    );
  },
  updateName: async (
    sendData: FormNameUpdateRequest
  ): Promise<ResponseWrapper<FormNameUpdateResponse>> => {
    return await RestService.patch<
      FormNameUpdateRequest,
      ResponseWrapper<FormNameUpdateResponse>
    >(Paths.form.updateName, sendData);
  },
  update: async (
    sendData: FormRequest
  ): Promise<ResponseWrapper<FormResponse>> => {
    return await RestService.put<FormRequest, ResponseWrapper<FormResponse>>(
      Paths.form.update,
      sendData
    );
  },
  delete: async (id: number): Promise<void> => {
    await RestService.delete<void>(Paths.form.delete(id));
  },
};
