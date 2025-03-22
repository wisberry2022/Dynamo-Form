import { ResponseWrapper, SurveySummaryResponse } from "@/6_shared/types";
import useSWR from "swr";
import { Paths } from "../core/Paths";

export const useSurveySummary = (surveyId: number) => {
  const {
    data: summary,
    isLoading,
    mutate,
  } = useSWR<ResponseWrapper<SurveySummaryResponse>>(
    surveyId ? Paths.report.getSummary(surveyId) : null
  );

  return { summary: summary?.data, isLoading, mutate };
};
