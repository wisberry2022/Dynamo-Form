import { SurveyListResponse } from "@/6_shared/types/domain/Survey";
import useSWR from "swr";
import { Paths } from "../core/Paths";
import { ResponseWrapper } from "@/6_shared/types";

export const useSurveyListSWR = () => {
  const { data: surveys, mutate } = useSWR<
    ResponseWrapper<SurveyListResponse[]>
  >(Paths.survey.list);

  return { surveys, mutate };
};
