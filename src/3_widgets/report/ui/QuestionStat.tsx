import {
  AttachStat,
  AttachStat2View,
  RatingStat,
  RatingStat2View,
  SelectStat,
  SelectStat2View,
  TextualStat,
  TextualStat2View,
} from "@/4_features/report";
import {
  useSurveyStatsSWR,
  SelectStat as SelectStatType,
  TextualStat as TextualStatType,
  RatingStat as RatingStatType,
  AttachStat as AttachStatType,
} from "@/6_shared";
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
        return <TextualStat stat={TextualStat2View(stat as TextualStatType)} />;
      case "RATING":
      case "SLIDER":
        return <RatingStat stat={RatingStat2View(stat as RatingStatType)} />;
      case "FILE_ATTACH":
        return <AttachStat stat={AttachStat2View(stat as AttachStatType)} />;
      default:
        return;
    }
  });
};
