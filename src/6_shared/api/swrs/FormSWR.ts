import {
  FormListResponse,
  FormResponse,
  ResponseWrapper,
} from "@/6_shared/types";
import useSWR from "swr";
import { Paths } from "../core/Paths";

export const useFormSWR = (id: number) => {
  const { data: form, mutate } = useSWR<ResponseWrapper<FormResponse>>(
    id ? Paths.form.get(id) : null
  );

  return { form, mutate };
};

export const useFormListSWR = () => {
  const { data: formList, mutate } = useSWR<
    ResponseWrapper<FormListResponse[]>
  >(Paths.form.getAll);

  return { formList, mutate };
};
