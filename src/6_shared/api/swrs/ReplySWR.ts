import useSWR from "swr";
import { Paths } from "../core/Paths";
import { ReplyViewResponse, ResponseWrapper } from "@/6_shared/types";

export const useGetFormBySurveySWR = (surveyId: number) => {
  const { data: form, mutate } = useSWR<ResponseWrapper<ReplyViewResponse>>(
    Paths.reply.getForm(surveyId)
  );

  return { form: form?.data, mutate };
};
