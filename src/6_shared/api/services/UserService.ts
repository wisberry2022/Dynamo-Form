import { ResponseWrapper, SignUpRequest } from "@/6_shared/types";
import { RestService } from "../core/RestService";
import { Paths } from "../core/Paths";

export const User = {
  signUp: async (sendData: SignUpRequest): Promise<ResponseWrapper<String>> => {
    return await RestService.post(Paths.user.signUp, sendData);
  },
};
