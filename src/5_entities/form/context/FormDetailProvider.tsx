import { FC, ReactNode } from "react";
import { FormDetailContext } from "./FormDetailContext";
import { FormResponse, useDataHandler, useFormSWR } from "@/6_shared";

type FormDetailProviderProps = {
  formId: number;
  children: ReactNode;
};

export const FormDetailProvider: FC<FormDetailProviderProps> = (props) => {
  const { formId, children } = props;
  const { form } = useFormSWR(formId);
  const formHandler = useDataHandler<FormResponse>(form?.data as FormResponse);

  const onSectionSave = (form: FormResponse) => {
    formHandler.setState(form);
  };

  return (
    <FormDetailContext.Provider
      value={{
        formId,
        form: formHandler.state,
        formHandler,
        onSectionSave,
      }}
    >
      {children}
    </FormDetailContext.Provider>
  );
};
