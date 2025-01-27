import { FC } from "react";
import styles from "./styles/form-detail.module.css";
import { FormInfo } from "@/3_widgets/form";
import { useFormDetailContext } from "@/5_entities/form";
import {
  Button,
  Form,
  FormRequest,
  Question as QuestionResponse,
  Toast,
} from "@/6_shared";
import { QuestionSection } from "@/3_widgets/question";

export const FormDetail: FC = () => {
  const { form, formHandler, onAddQuestion, onDeleteQuestion, mutate } =
    useFormDetailContext();
  const { setState } = formHandler;

  const onQuestionSave = (question: QuestionResponse) => {
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

  const onUpdate = async () => {
    try {
      await Form.update(form as FormRequest);
      Toast.success("양식이 수정되었습니다.");
      mutate();
    } catch (e) {
      Toast.error("양식 수정에 실패했습니다.");
    }
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
      <div className={styles.updateBtnBox}>
        <Button variant="brighten" onClick={onAddQuestion}>
          질문 추가하기
        </Button>
        <Button variant="pink" onClick={onUpdate}>
          수정하기
        </Button>
      </div>
    </div>
  );
};
