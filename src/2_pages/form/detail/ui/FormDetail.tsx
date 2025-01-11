import { FC } from "react";
import styles from "./styles/form-detail.module.css";
import { QuestionPreview } from "@/4_features/question";
import { FormInfo } from "@/3_widgets/form";
import { useFormDetailContext } from "@/5_entities/form";
import { Question as QuestionResponse } from "@/6_shared";
import { QuestionSection } from "@/3_widgets/question";

export const FormDetail: FC = () => {
  const { form, formHandler, onDeleteQuestion } = useFormDetailContext();
  const { setState } = formHandler;

  const onQuestionSave = (question: QuestionResponse) => {
    setState((prev) => ({
      ...prev,
      questions: prev.questions.map((quest) => {
        if (quest.id !== question.id) {
          return quest;
        }
        return question;
      }),
    }));
  };

  return (
    <div id={styles.formDetail}>
      {form && <FormInfo form={form} formHandler={formHandler} />}
      {form &&
        form.questions.map((quest) => (
          <QuestionSection
            key={quest.id}
            question={quest}
            onQuestionSave={onQuestionSave}
            onDelete={onDeleteQuestion}
          />
        ))}
    </div>
  );
};
