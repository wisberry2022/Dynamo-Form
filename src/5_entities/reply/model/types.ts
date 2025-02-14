import { ReplyViewResponse, SurveyResponseRequest } from "@/6_shared";
import { ChangeEventHandler } from "react";

export type ReplyHandler = {
  state: SurveyResponseRequest;
  form: ReplyViewResponse;
  respondent: {
    value: SurveyResponseRequest["respondent"];
    onChangeTextField: ChangeEventHandler<HTMLInputElement>;
    onRadio: (value: SurveyResponseRequest["respondent"]["gender"]) => void;
  };
};
