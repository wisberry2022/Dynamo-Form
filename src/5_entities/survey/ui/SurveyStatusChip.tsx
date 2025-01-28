import { SurveyStatus } from "@/6_shared/types/domain/Survey";
import { FC } from "react";
import { SurveyStatusModel } from "../model/SurveyStatusModel";
import { Chip } from "@/6_shared";

type SurveyStatusChipProps = {
  status: SurveyStatus;
};

export const SurveyStatusChip: FC<SurveyStatusChipProps> = (props) => {
  const { status } = props;

  return (
    <Chip
      variant={SurveyStatusModel[status].variant}
      text={SurveyStatusModel[status].text}
    />
  );
};
