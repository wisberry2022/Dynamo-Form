import {
  SurveyDetailResponse,
  SurveyListResponse,
  SurveyValidResponse,
} from "@/6_shared/types/domain/Survey";
import useSWR from "swr";
import { Paths } from "../core/Paths";
import { ResponseWrapper } from "@/6_shared/types";

export const useSurveyListSWR = () => {
  const { data: surveys, mutate } = useSWR<
    ResponseWrapper<SurveyListResponse[]>
  >(Paths.survey.list);

  return { surveys, mutate };
};

export const useSurveyDetailSWR = (id: number) => {
  const { data: survey, mutate } = useSWR<
    ResponseWrapper<SurveyDetailResponse>
  >(id ? Paths.survey.get(id) : null);

  return { survey: survey?.data, mutate };
};

export const useSurveyJoinValidSWR = (token: string | null | undefined) => {
  const { data: survey, mutate } = useSWR<ResponseWrapper<SurveyValidResponse>>(
    token ? Paths.survey.join.valid(token) : null
  );

  return { survey: survey?.data, mutate };
};
