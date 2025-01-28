import {
  FormListResponse,
  FormPopupListResponse,
  FormResponse,
  ResponseWrapper,
  SimpleFormDetailResponse,
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

export const useFormPopupListSWR = () => {
  const { data: forms, mutate } = useSWR<
    ResponseWrapper<FormPopupListResponse[]>
  >(Paths.form.getPopupList);

  return { forms: forms?.data, mutate };
};

export const useFormSummarySWR = (id: number | null) => {
  const { data: summary, mutate } = useSWR<
    ResponseWrapper<SimpleFormDetailResponse>
  >(id ? Paths.form.getSummary(id) : null);

  return { summary: summary?.data, mutate };
};
