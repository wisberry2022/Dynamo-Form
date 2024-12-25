import { FormListResponse, ResponseWrapper } from "@/6_shared/types";
import useSWR from "swr";
import { Paths } from "../core/Paths";

export const useFormListSWR = () => {
  const { data: formList, mutate } = useSWR<ResponseWrapper<FormListResponse>>(
    Paths.form.getAll
  );

  return { formList, mutate };
};
