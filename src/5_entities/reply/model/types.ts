import {
  Gender,
  Reply,
  ReplyViewResponse,
  RespondentRequest,
  SurveyResponseRequest,
} from "@/6_shared";
import { ChangeEventHandler } from "react";

export type ReplySetterHandler = {
  value: Reply[];
  onReplySelectQuestion: (questionId: number, answers: string[]) => void;
  onReplyDropDownQuestion: (questionId: number, answer: string) => void;
  onReplyTextualQuestion: (questionId: number, text: string) => void;
  onReplyRatingQuestion: (questionId: number, score: number) => void;
  onReplySliderQuestion: (questionId: number, score: number) => void;
  onReplyAttachQuestion: (questionId: number, fileKey: string) => void;
};

export type ReplyHandler = {
  state: SurveyResponseRequest;
  form: ReplyViewResponse;
  respondent: {
    value: RespondentRequest;
    onChangeTextField: ChangeEventHandler<HTMLInputElement>;
    onRadio: (value: Gender) => void;
  };
  reply: ReplySetterHandler;
};
