import {
  FileDownloadRequest,
  FileUploadResponse,
  ResponseWrapper,
} from "@/6_shared/types";
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

  download: async (
    data: FileDownloadRequest,
    isCompress: boolean = false
  ): Promise<void> => {
    const response = await axiosInstance.post(
      Paths.file.download(isCompress),
      data,
      {
        responseType: "blob",
      }
    );
    const disposition = response.headers["content-disposition"];
    let filename = "downloaded-file";

    // Content-Disposition에서 파일명 추출
    if (disposition && disposition.indexOf("filename=") !== -1) {
      const match = disposition.match(
        /filename\*=UTF-8''(.+)|filename="?([^"]+)"?/
      );
      if (match) {
        filename = decodeURIComponent(match[1] || match[2]);
      }
    }

    const blob = new Blob([response.data]);
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();

    // 정리
    window.URL.revokeObjectURL(url);
    document.body.removeChild(link);
  },
};
