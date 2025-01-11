import {
  DropDownQuestion as DropdownQuestionResponse,
  Select,
} from "@/6_shared";
import { FC } from "react";
import styles from "./styles/drop-down-question.module.css";

type DropdownQuestionProps = {
  question: DropdownQuestionResponse;
};

export const DropdownQuestion: FC<DropdownQuestionProps> = (props) => {
  const { question } = props;

  return (
    <div className={styles.qContainer}>
      <h3>{question.question}</h3>
      <Select value={question.questions[0]}>
        {question.questions.map((quest, idx) => (
          <Select.Item key={idx} label={quest} value={quest} />
        ))}
      </Select>
    </div>
  );
};
