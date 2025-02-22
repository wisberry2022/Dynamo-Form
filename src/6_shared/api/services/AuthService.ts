import { ResponseWrapper, SignInRequest } from "@/6_shared/types";
import { RestService } from "../core/RestService";
import { Paths } from "../core/Paths";
import { axiosInstance } from "../core/axiosInstance";

export const Auth = {
  signIn: async (sendData: SignInRequest): Promise<any> => {
    await axiosInstance.post(Paths.auth.signIn, sendData, {
      withCredentials: true,
    });
  },
};
