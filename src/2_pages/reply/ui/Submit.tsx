import { FC } from "react";
import { FormInfoView } from "@/4_features/form";
import styles from "./styles/submit.module.css";
import { useReplyHandler } from "@/5_entities/reply/libs/useReplyHandler";
import { Reply } from "@/6_shared/api";
import { Button, endpoints, handleError, Toast } from "@/6_shared";
import { useRouter } from "next/router";
import { ReplyQuestion } from "@/4_features/question";

export const Submit: FC = () => {
  const { form, state } = useReplyHandler();

  const router = useRouter();

  const onSave = async () => {
    try {
      await Reply.submit(form.survey.id, state);
      router.replace(endpoints.reply.thanks);
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <div id={styles.submit}>
      <FormInfoView title={form.survey.title} desc={form.survey.description} />
      <div id={styles.questionBox}>
        {form.form.questions.map((question) => {
          return <ReplyQuestion key={question.id} question={question} />;
        })}
      </div>
      <div className={styles.btn}>
        <Button variant="secondary" onClick={onSave}>
          설문 제출하기
        </Button>
      </div>
    </div>
  );
};
