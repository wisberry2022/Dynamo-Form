import {
  DropDownQuestion as DropdownQuestionResponse,
  DropdownReply,
  Select,
} from "@/6_shared";
import { FC } from "react";
import styles from "./styles/drop-down-question.module.css";

type DropdownQuestionProps = {
  question: DropdownQuestionResponse;
  value?: DropdownReply;
  handler?: (questionId: number, answer: string) => void;
};

export const DropdownQuestion: FC<DropdownQuestionProps> = (props) => {
  const { question, value = { answer: "" }, handler = () => {} } = props;

  const onChange = (value: string) => {
    handler(question.id as number, value);
  };

  return (
    <div className={styles.qContainer}>
      <Select
        value={value.answer ? value.answer : question.questions[0]}
        width={35}
        onChange={onChange}
      >
        {question.questions.map((quest, idx) => (
          <Select.Item key={idx} label={quest} value={quest} />
        ))}
      </Select>
    </div>
  );
};
