import { useRecoilState, useSetRecoilState } from "recoil";
import { FormViewState, ReplyState } from "../model/states";
import {
  AttachReply,
  DropdownReply,
  Gender,
  RatingReply,
  Reply,
  ReplyViewResponse,
  SelectReply,
  SliderReply,
} from "@/6_shared";
import { ChangeEventHandler, useEffect } from "react";
import { convert2ReplyState } from "./TypeMapper";
import { ReplyHandler } from "../model/types";

export const useReplyHandler = (
  data?: ReplyViewResponse | undefined
): ReplyHandler => {
  const [state, setState] = useRecoilState(ReplyState);
  const [form, setForm] = useRecoilState(FormViewState);

  useEffect(() => {
    if (data) {
      setState(convert2ReplyState(data));
      setForm(data);
    }
  }, [data]);

  ///////// 설문자 정보 입력 //////////
  const onChangeRespondentTextField: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      respondent: {
        ...prev.respondent,
        [name]: value,
      },
    }));
  };

  const onChangeRespondentRadio = (value: Gender) => {
    setState((prev) => ({
      ...prev,
      respondent: {
        ...prev.respondent,
        gender: value,
      },
    }));
  };

  ///////// core 함수 //////////
  const _setReply = (
    questionId: number,
    setter: (reply: Reply, idx: number) => Reply
  ) => {
    setState((prev) => ({
      ...prev,
      replyForm: {
        ...prev.replyForm,
        replies: prev.replyForm.replies.map(setter),
      },
    }));
  };

  ///////// 설문 응답 입력 //////////
  const onReplySelectQuestion = (questionId: number, answers: string[]) => {
    _setReply(questionId, (reply, idx) => {
      if (reply.id === questionId) {
        return {
          ...reply,
          answers,
        } as SelectReply;
      }
      return reply;
    });
  };

  const onReplyDropDownQuestion = (questionId: number, answer: string) => {
    _setReply(questionId, (reply, idx) => {
      if (reply.id === questionId) {
        return {
          ...reply,
          answer,
        } as DropdownReply;
      }
      return reply;
    });
  };

  const onReplyTextualQuestion = (questionId: number, text: string) => {
    _setReply(questionId, (reply, idx) => {
      if (reply.id === questionId) {
        return {
          ...reply,
          text,
        };
      }
      return reply;
    });
  };

  const onReplyRatingQuestion = (questionId: number, score: number) => {
    _setReply(questionId, (reply, idx) => {
      if (reply.id === questionId) {
        return {
          ...reply,
          score,
        } as RatingReply;
      }
      return reply;
    });
  };

  const onReplySliderQuestion = (questionId: number, score: number) => {
    _setReply(questionId, (reply, idx) => {
      if (reply.id === questionId) {
        return {
          ...reply,
          score,
        } as SliderReply;
      }
      return reply;
    });
  };

  const onReplyAttachQuestion = (questionId: number) => {
    _setReply(questionId, (reply, idx) => {
      if (reply.id === questionId) {
        return {
          ...reply,
        } as AttachReply;
      }
      return reply;
    });
  };

  return {
    state,
    form,
    respondent: {
      value: state.respondent,
      onChangeTextField: onChangeRespondentTextField,
      onRadio: onChangeRespondentRadio,
    },
    reply: {
      value: state.replyForm.replies,
      onReplySelectQuestion,
      onReplyDropDownQuestion,
      onReplyTextualQuestion,
      onReplyRatingQuestion,
      onReplySliderQuestion,
      onReplyAttachQuestion,
    },
  };
};
