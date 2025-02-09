import { FC } from "react";
import styles from "./styles/survey-index.module.css";
import { SurveyList } from "@/3_widgets/survey";
import { Button, endpoints, useSurveyListSWR } from "@/6_shared";
import { useRouter } from "next/router";

export const SurveyListMain: FC = () => {
  const { surveys } = useSurveyListSWR();
  const router = useRouter();

  const goCreate = () => {
    router.push(endpoints.survey.create);
  };

  return (
    <div id={styles.listContainer}>
      <div className={styles.listHeader}>
        <h3>설문 조사 목록</h3>
        <Button onClick={goCreate}>설문 조사 추가</Button>
      </div>
      {surveys && <SurveyList surveys={surveys.data} />}
    </div>
  );
};
