import { Button, ListButtonType2, useSurveyRespondentsSWR } from "@/6_shared";
import { FC } from "react";
import styles from "./styles/resp-survey.module.css";
import { Respondent } from "@/5_entities/report";

type RespondentsBySurveyProps = {
  surveyId: number;
};

export const RespondentsBySurvey: FC<RespondentsBySurveyProps> = (props) => {
  const { surveyId } = props;
  const { respondents } = useSurveyRespondentsSWR(surveyId);

  return (
    <div className={styles.list}>
      {respondents?.map((resp) => (
        <Respondent key={resp.id} respondent={resp} />
      ))}
    </div>
  );
};
