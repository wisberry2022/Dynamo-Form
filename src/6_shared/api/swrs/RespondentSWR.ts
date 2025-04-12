import { RespondentResponse, ResponseWrapper } from "@/6_shared/types";
import useSWR from "swr";
import { Paths } from "../core/Paths";

export const useRespondentDetailSWR = (respondentId: number) => {
  const { data: respondent, mutate } = useSWR<
    ResponseWrapper<RespondentResponse>
  >(respondentId ? Paths.respondent.get(respondentId) : null);

  return { respondent: respondent?.data, mutate };
};
