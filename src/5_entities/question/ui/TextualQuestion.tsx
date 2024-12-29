import { TextualQuestion as TextualQuestionResponse } from "@/6_shared";
import { FC } from "react";
import styles from "./styles/textual-question.module.css";

type TextualQuestionProps = {
  question: TextualQuestionResponse;
};

export const TextualQuestion: FC<TextualQuestionProps> = (props) => {
  const { question } = props;

  return (
    <div className={styles.qContainer}>
      <div className={styles.titleBox}>
        <h4>{question.question}</h4>
        <span>({question.answerLimit}자 이내로 서술)</span>
      </div>
      <div className={styles.answerArea}>
        <strong>답변 영역입니다.</strong>
      </div>
    </div>
  );
};
