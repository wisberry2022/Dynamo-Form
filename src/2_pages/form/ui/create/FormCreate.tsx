import { FC } from "react";
import styles from "./styles/form-create.module.css";
import { useFormCreateContext } from "@/5_entities/form/context/FormCreateContext";
import { FormInfo } from "@/3_widgets/form";
import { Button, endpoints, Form, Question, Toast } from "@/6_shared";
import { QuestionSection } from "@/3_widgets/question";
import { useRouter } from "next/router";

export const FormCreate: FC = () => {
  const { form, formHandler, onAddQuestion, onDeleteQuestion } =
    useFormCreateContext();
  const { setState } = formHandler;

  const onQuestionSave = (question: Question) => {
    setState((prev) => ({
      ...prev,
      questions: prev.questions.map((quest) => {
        if (quest.viewOrder !== question.viewOrder) {
          return quest;
        }
        return question;
      }),
    }));
  };

  const router = useRouter();

  const onSave = async () => {
    try {
      await Form.save(form);
      Toast.success("양식이 저장되었습니다.");
      router.replace(endpoints.form.index);
    } catch (e) {
      Toast.error("양식 저장에 실패했습니다.");
    }
  };

  return (
    <div id={styles.formCreate}>
      <FormInfo form={form} formHandler={formHandler} />
      {form.questions.map((quest) => (
        <QuestionSection
          key={quest.viewOrder}
          question={quest}
          onQuestionSave={onQuestionSave}
          onDelete={onDeleteQuestion}
        />
      ))}
      <div className={styles.updateBtnBox}>
        <Button variant="brighten" onClick={onAddQuestion}>
          질문 추가하기
        </Button>
        <Button variant="pink" onClick={onSave}>
          저장하기
        </Button>
      </div>
    </div>
  );
};
