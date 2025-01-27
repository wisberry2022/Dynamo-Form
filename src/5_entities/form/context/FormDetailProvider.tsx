import { FC, ReactNode } from "react";
import { FormDetailContext } from "./FormDetailContext";
import {
  FormResponse,
  getNextSequenceObject,
  useDataHandler,
  useFormSWR,
} from "@/6_shared";
import { getNextQuestion } from "../libs/utils";

type FormDetailProviderProps = {
  formId: number;
  children: ReactNode;
};

export const FormDetailProvider: FC<FormDetailProviderProps> = (props) => {
  const { formId, children } = props;
  const { form, mutate } = useFormSWR(formId);
  const formHandler = useDataHandler<FormResponse>(form?.data as FormResponse);

  const onSectionSave = (form: FormResponse) => {
    formHandler.setState(form);
  };

  // 질문 추가/삭제 함수
  const onAddQuestion = () => {
    formHandler.setState((prev) => {
      const nextViewOrder = getNextSequenceObject(prev.questions, "viewOrder");
      return {
        ...prev,
        questions: prev.questions.concat(getNextQuestion(nextViewOrder)),
      };
    });
  };

  const onDeleteQuestion = (viewOrder: number) => {
    formHandler.setState({
      ...formHandler.state,
      questions: formHandler.state.questions
        .filter((quest) => quest.viewOrder !== viewOrder)
        .sort((a, b) => a.viewOrder - b.viewOrder)
        .map((quest, idx) => ({ ...quest, viewOrder: idx + 1 })),
    });
  };

  return (
    <FormDetailContext.Provider
      value={{
        formId,
        form: formHandler.state,
        formHandler,
        onSectionSave,
        onAddQuestion,
        onDeleteQuestion,
        mutate,
      }}
    >
      {children}
    </FormDetailContext.Provider>
  );
};
