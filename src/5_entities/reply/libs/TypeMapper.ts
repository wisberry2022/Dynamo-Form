import {
  ReplyFormRequest,
  ReplyViewResponse,
  SurveyResponseRequest,
} from "@/6_shared";
import { getReplies } from "./utils";

export const convert2ReplyState = (
  data: ReplyViewResponse
): SurveyResponseRequest => {
  return {
    respondent: {
      name: "",
      email: "",
      gender: "MALE",
      phoneNumber: "",
    },
    replyForm: {
      id: data.form.id as number,
      replies: getReplies(data.form.questions),
    },
  };
};
