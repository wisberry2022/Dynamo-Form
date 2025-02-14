import {
  FormResponse,
  ReplyViewResponse,
  SurveyResponseRequest,
} from "@/6_shared";
import { atom } from "recoil";

export const ReplyState = atom<SurveyResponseRequest>({
  key: "ReplyState",
  default: {
    respondent: {
      name: "",
      email: "",
      gender: "MALE",
      phoneNumber: "",
    },
    replyForm: {
      id: 0,
      replies: [],
    },
  },
});

export const FormViewState = atom<ReplyViewResponse>({
  key: "FormViewState",
  default: {
    surveyId: 0,
    form: {} as FormResponse,
  },
});
