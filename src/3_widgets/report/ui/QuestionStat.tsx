import { useSurveyStatsSWR } from "@/6_shared";
import { FC } from "react";

type QuestionStatProps = {
  surveyId: number;
};

export const QuestionStat: FC<QuestionStatProps> = (props) => {
  const { surveyId } = props;
  const { stats } = useSurveyStatsSWR(surveyId);

  console.log('stats', stats)

  return <div>hi</div>;
};
