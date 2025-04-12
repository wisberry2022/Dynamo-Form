import { SurveySummaryViewType } from "@/5_entities/report/model/types";
import { isEmptyObject, SurveySummaryResponse } from "@/6_shared";

export const resp2ViewType = (
  summary: SurveySummaryResponse
): SurveySummaryViewType => {
  if (isEmptyObject(summary)) {
    return {} as SurveySummaryViewType;
  }
  const { id, ...view } = summary;
  return view;
};
