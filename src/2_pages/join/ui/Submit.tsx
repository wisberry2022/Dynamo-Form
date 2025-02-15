import { FC } from "react";
import { FormInfoView } from "@/4_features/form";
import styles from "./styles/submit.module.css";
import { useReplyHandler } from "@/5_entities/reply/libs/useReplyHandler";
import { QuestionReplySection } from "@/3_widgets/question";

export const Submit: FC = () => {
  const { form, state } = useReplyHandler();

  return (
    <div id={styles.submit}>
      <FormInfoView title={form.survey.title} desc={form.survey.description} />
      <div id={styles.questionBox}>
        {form.form.questions.map((question) => {
          return <QuestionReplySection key={question.id} question={question} />;
        })}
      </div>
    </div>
  );
};
