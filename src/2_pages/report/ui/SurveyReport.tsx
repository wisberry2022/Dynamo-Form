import { QuestionStat, SurveySummary } from "@/3_widgets/report";
import { FC } from "react";
import styles from "./survey-report.module.css";
import { BasicTab } from "@/6_shared";
import { CategoryScale, Chart, registerables } from "chart.js";

Chart.register(...registerables);

type SurveyReportProps = {
  surveyId: number;
};

export const SurveyReport: FC<SurveyReportProps> = (props) => {
  const { surveyId } = props;
  return (
    <div className={styles.reportContainer}>
      <SurveySummary surveyId={surveyId} />
      <BasicTab tabs={["질문별 통계", "개별 응답 확인"]}>
        <QuestionStat surveyId={surveyId} />
        <div>두번째 탭</div>
      </BasicTab>
    </div>
  );
};
