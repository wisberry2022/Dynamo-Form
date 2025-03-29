import {
  AttachStat,
  RatingStat,
  SelectStat,
  SelectStat2View,
  TextualStat,
} from "@/4_features/report";
import { useSurveyStatsSWR, SelectStat as SelectStatType } from "@/6_shared";
import { FC } from "react";

type QuestionStatProps = {
  surveyId: number;
};

export const QuestionStat: FC<QuestionStatProps> = (props) => {
  const { surveyId } = props;
  const { stats } = useSurveyStatsSWR(surveyId);

  return stats?.map((stat) => {
    switch (stat.subCategory) {
      case "MULTI_QUESTION":
      case "DROPDOWN":
        return <SelectStat stat={SelectStat2View(stat as SelectStatType)} />;
      case "TEXTUAL":
        return <TextualStat />;
      case "RATING":
      case "SLIDER":
        return <RatingStat />;
      case "FILE_ATTACH":
        return <AttachStat />;
      default:
        return;
    }
  });
};
