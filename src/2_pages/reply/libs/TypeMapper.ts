import { RespondentResponse, RespondentValidRequest } from "@/6_shared";

export const convert2RespondentValid = (
  data: RespondentResponse
): RespondentValidRequest => {
  return {
    email: data.email,
    phoneNumber: data.phoneNumber,
  };
};
