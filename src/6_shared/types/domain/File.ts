export type FileUploadResponse = {
  fileName: string;
  fileKey: string;
}

export type FileDownloadRequest = {
  fileKeys: string[];
}