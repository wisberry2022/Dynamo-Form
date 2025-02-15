import {
  FormResponse,
  ReplyViewResponse,
  SimpleSurvey,
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
    survey: {} as SimpleSurvey,
    form: {} as FormResponse,
  },
});
