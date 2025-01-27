import { DataHandlerType, FormResponse } from "@/6_shared";
import { createContext, useContext } from "react";

type FormDetailContextType = {
  formId: number;
  form: FormResponse | undefined | null;
  formHandler: DataHandlerType<FormResponse>;
  onSectionSave: (form: FormResponse) => void;
  onDeleteQuestion: (id: number) => void;
  mutate: () => void;
};

export const FormDetailContext = createContext<FormDetailContextType>({
  formId: 0,
  form: {} as FormResponse,
  formHandler: {} as DataHandlerType<FormResponse>,
  onSectionSave: () => {},
  onDeleteQuestion: () => {},
  mutate: () => {},
});

export const useFormDetailContext = () => useContext(FormDetailContext);
