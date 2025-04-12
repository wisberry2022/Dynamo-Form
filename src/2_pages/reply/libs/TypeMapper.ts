import { RespondentRequest, RespondentValidRequest } from "@/6_shared";

export const convert2RespondentValid = (
  data: RespondentRequest
): RespondentValidRequest => {
  return {
    email: data.email,
    phoneNumber: data.phoneNumber,
  };
};
