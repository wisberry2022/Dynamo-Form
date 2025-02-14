import { useRecoilState, useSetRecoilState } from "recoil";
import { FormViewState, ReplyState } from "../model/states";
import { Gender, ReplyViewResponse } from "@/6_shared";
import { ChangeEventHandler, useEffect } from "react";
import { convert2ReplyState } from "./TypeMapper";
import { ReplyHandler } from "../model/types";

export const useReplyHandler = (data?: ReplyViewResponse | undefined): ReplyHandler => {
  const [state, setState] = useRecoilState(ReplyState);
  const [form, setForm] = useRecoilState(FormViewState);

  useEffect(() => {
    if (data) {
      setState(convert2ReplyState(data));
      setForm(data);
    }
  }, [data]);

  ////////// core //////////

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

  return {
    state,
    form,
    respondent: {
      value: state.respondent,
      onChangeTextField: onChangeRespondentTextField,
      onRadio: onChangeRespondentRadio,
    },
  };
};
