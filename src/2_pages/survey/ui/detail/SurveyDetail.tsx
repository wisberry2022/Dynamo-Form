import {
  Button,
  SurveyDetailResponse,
  SurveyStatus,
  useDataHandler,
  useSurveyDetailSWR,
} from "@/6_shared";
import { FC } from "react";
import styles from "./styles/survey-detail.module.css";
import { SelectableFormSelector } from "@/3_widgets/form";
import { SurveyDetailSetting } from "@/3_widgets/survey";
import { SurveyDetailButtonsArea } from "@/4_features/survey";

type SurveyDetailProps = {
  surveyId: number;
};

export const SurveyDetail: FC<SurveyDetailProps> = (props) => {
  const { surveyId } = props;
  const { survey } = useSurveyDetailSWR(surveyId);

  const surveyHandler = useDataHandler<SurveyDetailResponse>(
    survey as SurveyDetailResponse
  );

  return (
    surveyHandler.state && (
      <div className={styles.container}>
        <div className={styles.setting}>
          <SelectableFormSelector
            formId={surveyHandler.state?.formId as number}
            status={surveyHandler.state?.status as SurveyStatus}
            surveyHandler={surveyHandler}
          />
          <SurveyDetailSetting surveyHandler={surveyHandler} />
        </div>
        <div className={styles.btnBox}>
          <SurveyDetailButtonsArea
            survey={surveyHandler.state}
            status={surveyHandler.state?.status}
          />
        </div>
      </div>
    )
  );
};
