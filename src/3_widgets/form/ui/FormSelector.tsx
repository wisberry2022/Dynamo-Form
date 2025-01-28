import { FC, useEffect, useState } from "react";
import styles from "./styles/form-selector.module.css";
import {
  Button,
  DataHandlerType,
  Form,
  FormPopupListResponse,
  PopupTrigger,
  SimpleFormDetailResponse,
  SurveyRequest,
  Toast,
} from "@/6_shared";
import {
  FormLoaderDialog,
  FormSummary,
  SimpleFormDetailState,
} from "@/4_features/form";
import { useRecoilState } from "recoil";

type FormSelectorProps = {
  formId: number | null;
  surveyHandler: DataHandlerType<SurveyRequest>;
};

export const FormSelector: FC<FormSelectorProps> = (props) => {
  const { formId, surveyHandler } = props;

  const [form, setForm] = useRecoilState(SimpleFormDetailState);

  useEffect(() => {
    // 컴포넌트 언마운트 시 state 초기화
    return () => setForm({} as SimpleFormDetailResponse);
  }, []);

  const onConfirm = async (value: FormPopupListResponse) => {
    if (!value?.id) {
      return;
    }
    try {
      const response = await Form.getSummary(value.id);
      surveyHandler.setter("formId", value.id);
      setForm(response.data);
      Toast.success("양식을 불러왔습니다.");
    } catch (e) {
      Toast.error("양식을 불러오는 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className={styles.selector}>
      <PopupTrigger
        trigger={<Button variant="brighten">양식 불러오기</Button>}
        popup={<FormLoaderDialog formId={formId} onConfirm={onConfirm} />}
      />
      <FormSummary form={form} />
    </div>
  );
};
