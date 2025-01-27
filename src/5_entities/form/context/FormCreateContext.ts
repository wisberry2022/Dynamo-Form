import { DataHandlerType, FormRequest } from "@/6_shared";
import { createContext, useContext } from "react";

type FormCreateContextType = {
  form: FormRequest;
  formHandler: DataHandlerType<FormRequest>;
  onSectionSave: (from: FormRequest) => void;
  onAddQuestion: () => void;
  onDeleteQuestion: (viewOrder: number) => void;
};

export const FormCreateContext = createContext<FormCreateContextType>({
  form: {} as FormRequest,
  formHandler: {} as DataHandlerType<FormRequest>,
  onSectionSave: () => {},
  onAddQuestion: () => {},
  onDeleteQuestion: () => {},
});

export const useFormCreateContext = () => useContext(FormCreateContext);
