import { FileUploadResponse, ResponseWrapper } from "@/6_shared/types";
import { RestService } from "../core/RestService";
import { Paths } from "../core/Paths";
import { axiosInstance } from "../core/axiosInstance";

export const File = {
  upload: async (
    data: FormData
  ): Promise<ResponseWrapper<FileUploadResponse>> => {
    const response = await axiosInstance.post(Paths.file.upload, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  },
};
