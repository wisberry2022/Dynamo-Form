import { FC } from "react";
import styles from "./styles/form-selector.module.css";
import {
  Button,
  DataHandlerType,
  Form,
  FormPopupListResponse,
  handleError,
  PopupTrigger,
  SimpleFormDetailResponse,
  SurveyDetailResponse,
  SurveyRequest,
  SurveyStatus,
  Toast,
  useFormSummarySWR,
} from "@/6_shared";
import { FormLoaderDialog, FormSummary } from "@/4_features/form";

type SelectableFormSelectorProps = {
  formId: number | null;
  status: SurveyStatus;
  surveyHandler: DataHandlerType<SurveyDetailResponse>;
};

export const SelectableFormSelector: FC<SelectableFormSelectorProps> = (
  props
) => {
  const { formId, status, surveyHandler } = props;
  const { summary, mutate } = useFormSummarySWR(formId);

  const onConfirm = (value: FormPopupListResponse) => {
    surveyHandler.setter("formId", value.id);
    Toast.success("양식을 불러왔습니다.");
    mutate();
  };

  return (
    <div className={styles.selector}>
      {status === "WAITING" && (
        <PopupTrigger
          trigger={<Button variant="brighten">양식 불러오기</Button>}
          popup={<FormLoaderDialog formId={formId} onConfirm={onConfirm} />}
        />
      )}
      <FormSummary form={summary as SimpleFormDetailResponse} />
    </div>
  );
};
