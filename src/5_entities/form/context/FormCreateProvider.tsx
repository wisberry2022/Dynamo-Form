import { FC, ReactNode } from "react";
import { FormCreateContext } from "./FormCreateContext";
import { FormRequest, getNextSequenceObject, useDataHandler } from "@/6_shared";
import { DefaultForm } from "../model/Question";
import { getNextQuestion } from "../libs/utils";

type FormCreateProviderProps = {
  children: ReactNode;
};

export const FormCreateProvider: FC<FormCreateProviderProps> = (props) => {
  const { children } = props;
  const formHandler = useDataHandler<FormRequest>(DefaultForm);

  const onSectionSave = (form: FormRequest) => {
    formHandler.setState(form);
  };

  const onAddQuestion = () => {
    formHandler.setState((prev) => {
      const nextSeq = getNextSequenceObject(prev.questions, "viewOrder");
      return {
        ...prev,
        questions: prev.questions.concat(getNextQuestion(nextSeq)),
      };
    });
  };

  const onDeleteQuestion = (viewOrder: number) => {
    formHandler.setState((prev) => ({
      ...prev,
      questions: prev.questions.filter((q) => q.viewOrder !== viewOrder),
    }));
  };

  return (
    <FormCreateContext.Provider
      value={{
        form: formHandler.state,
        formHandler,
        onSectionSave,
        onAddQuestion,
        onDeleteQuestion,
      }}
    >
      {children}
    </FormCreateContext.Provider>
  );
};
