import { FC } from "react";
import { FormInfoView } from "@/4_features/form";
import styles from "./styles/submit.module.css";
import { useReplyHandler } from "@/5_entities/reply/libs/useReplyHandler";

export const Submit: FC = () => {
  const { form, state } = useReplyHandler();

  return (
    <div id={styles.submit}>
      <FormInfoView title={form.survey.title} desc={form.survey.description} />
    </div>
  );
};
