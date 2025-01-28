import { FC } from "react";
import styles from "./styles/survey-index.module.css";
import { SurveyList } from "@/3_widgets/survey";
import { useSurveyListSWR } from "@/6_shared";

export const SurveyListMain: FC = () => {
  const { surveys } = useSurveyListSWR();

  return (
    <div id={styles.listContainer}>
      {surveys && <SurveyList surveys={surveys.data} />}
    </div>
  );
};
