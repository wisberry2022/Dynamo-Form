import { SummaryCard } from "@/5_entities/report";
import { SurveySummaryResponse, useSurveySummary } from "@/6_shared";
import { FC } from "react";
import styles from "./styles/survey-summary.module.css";
import { resp2ViewType } from "../libs/TypeMapper";

type SurveySummaryProps = {
  surveyId: number;
};

export const SurveySummary: FC<SurveySummaryProps> = (props) => {
  const { surveyId } = props;
  const { summary, mutate } = useSurveySummary(surveyId);

  return (
    <div className={styles.report}>
      <h3>요약 정보</h3>
      {summary && <SummaryCard data={resp2ViewType(summary)} />}
    </div>
  );
};
