import {
  ResponseWrapper,
  Stat,
  SurveyRespondentResponse,
  SurveySummaryResponse,
} from "@/6_shared/types";
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

export const useSurveyStatsSWR = (surveyId: number) => {
  const { data: stats } = useSWR<ResponseWrapper<Stat[]>>(
    surveyId ? Paths.report.getSurveyStats(surveyId) : null
  );

  return { stats: stats?.data };
};

export const useSurveyRespondentsSWR = (surveyId: number) => {
  const { data: respondents, mutate } = useSWR<
    ResponseWrapper<SurveyRespondentResponse[]>
  >(surveyId ? Paths.report.getSurveyRespondents(surveyId) : null);

  return { respondents: respondents?.data, mutate };
};
