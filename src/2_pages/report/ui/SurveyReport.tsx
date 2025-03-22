import { SurveySummary } from "@/3_widgets/report";
import { FC } from "react";

type SurveyReportProps = {
  surveyId: number;
};

export const SurveyReport: FC<SurveyReportProps> = (props) => {
  const { surveyId } = props;
  return <SurveySummary surveyId={surveyId} />;
};
