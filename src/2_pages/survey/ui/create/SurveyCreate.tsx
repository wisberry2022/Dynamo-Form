import { FC } from "react";
import styles from "./styles/survey-create.module.css";
import { FormSelector } from "@/3_widgets/form";
import { SurveySetting } from "@/3_widgets/survey";
import {
  Button,
  endpoints,
  Survey,
  SurveyRequest,
  Toast,
  useDataHandler,
} from "@/6_shared";
import { SurveyRequestForm } from "../../constant/SurveyConstant";
import { useRouter } from "next/router";

export const SurveyCreate: FC = () => {
  const surveyHandler = useDataHandler<SurveyRequest>(SurveyRequestForm);

  const router = useRouter();

  const onCancel = () => {
    router.replace(endpoints.survey.index);
  };

  const onSave = async () => {
    try {
      await Survey.save(surveyHandler.state);
      Toast.success("설문조사를 생성했습니다.");
      router.replace(endpoints.survey.index);
    } catch (e) {
      Toast.error("설문 조사 생성에 실패했습니다.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.setting}>
        <FormSelector
          formId={surveyHandler.state.formId}
          surveyHandler={surveyHandler}
        />
        <SurveySetting surveyHandler={surveyHandler} />
      </div>
      <div className={styles.btnBox}>
        <Button variant="brighten" onClick={onCancel}>
          취소하기
        </Button>
        <Button variant="primary" onClick={onSave}>
          저장하기
        </Button>
      </div>
    </div>
  );
};
