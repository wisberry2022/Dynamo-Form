import { ResponseWrapper } from "@/6_shared/types";
import { axiosInstance } from "./axiosInstance";

export const RestService = {
  get: async <R>(url: string): Promise<ResponseWrapper<R>> => {
    const response = await axiosInstance.get(url);
    return response.data;
  },
  post: async <P, R = any>(
    url: string,
    sendData: P
  ): Promise<ResponseWrapper<R>> => {
    const response = await axiosInstance.post(url, sendData);
    return response.data;
  },
  put: async <P, R = any>(
    url: string,
    sendData: P
  ): Promise<ResponseWrapper<R>> => {
    const response = await axiosInstance.put(url, sendData);
    return response.data;
  },
  patch: async <P, R = any>(
    url: string,
    sendData?: P
  ): Promise<ResponseWrapper<R>> => {
    const response = await axiosInstance.patch(url, sendData);
    return response.data;
  },
  delete: async <R = any>(url: string): Promise<ResponseWrapper<R>> => {
    const response = await axiosInstance.delete(url);
    return response.data;
  },
};
