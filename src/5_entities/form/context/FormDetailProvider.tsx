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

  const onDeleteQuestion = (id: number) => {
    formHandler.setState({
      ...formHandler.state,
      questions: formHandler.state.questions.filter((quest) => quest.id !== id),
    });
  };

  return (
    <FormDetailContext.Provider
      value={{
        formId,
        form: formHandler.state,
        formHandler,
        onSectionSave,
        onDeleteQuestion,
      }}
    >
      {children}
    </FormDetailContext.Provider>
  );
};
